#!/bin/bash

echo "🚀 Iniciando despliegue a producción..."

# Verificar que estamos en la rama principal
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "❌ Error: Debes estar en la rama main para desplegar"
  exit 1
fi

# Verificar variables de entorno requeridas
required_vars=(
  "POSTGRES_PASSWORD"
  "JWT_SECRET"
  "ENCRYPTION_KEY"
  "COOKIE_SECRET"
  "MAPS_API_KEY"
)

for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "❌ Error: La variable de entorno $var es requerida"
    exit 1
  fi
done

# Verificar conexión a la base de datos
echo "📊 Verificando conexión a la base de datos..."
if ! psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q' 2>/dev/null; then
  echo "❌ Error: No se puede conectar a la base de datos"
  exit 1
fi

# Crear directorio de backups si no existe
mkdir -p backups
mkdir -p logs

# Backup de la base de datos
echo "💾 Creando backup de la base de datos..."
BACKUP_FILE="backups/backup_$(date +%Y%m%d_%H%M%S).sql"
pg_dump -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" > "$BACKUP_FILE"

# Ejecutar migraciones de la base de datos
echo "🔄 Ejecutando migraciones de la base de datos..."
psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f src/lib/db/init.sql

# Instalar dependencias de producción
echo "📦 Instalando dependencias..."
npm ci --production

# Construir la aplicación
echo "🏗️ Construyendo la aplicación..."
NODE_ENV=production npm run build

# Verificar el build
if [ $? -ne 0 ]; then
  echo "❌ Error: La construcción falló"
  exit 1
fi

# Ejecutar linting
echo "🔍 Ejecutando linting..."
npm run lint

# Verificar el linting
if [ $? -ne 0 ]; then
  echo "❌ Error: El linting falló"
  exit 1
fi

# Verificar espacio en disco
DISK_SPACE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_SPACE" -gt 90 ]; then
  echo "⚠️ Advertencia: Espacio en disco bajo ($DISK_SPACE%)"
fi

# Detener cualquier proceso existente en el puerto 8000
if lsof -i:8000 > /dev/null; then
  echo "⚠️ El puerto 8000 está en uso. Deteniendo el proceso anterior..."
  lsof -ti:8000 | xargs kill -9
fi

# Configurar variables de entorno de producción
export NODE_ENV=production
export PORT=8000

# Crear archivo de log
touch logs/production.log

# Iniciar la aplicación
echo "🌟 Iniciando la aplicación en modo producción..."
npm run start > logs/production.log 2>&1 &

# Esperar a que la aplicación esté lista
echo "⏳ Esperando a que la aplicación esté lista..."
timeout=30
while ! curl -s http://localhost:8000 > /dev/null; do
  if [ $timeout -le 0 ]; then
    echo "❌ Error: La aplicación no respondió a tiempo"
    exit 1
  fi
  timeout=$((timeout-1))
  sleep 1
done

echo "✅ Despliegue completado exitosamente!"
echo "🌐 La aplicación está corriendo en http://localhost:8000"
echo "📊 Monitoreando logs..."
tail -f logs/production.log
