#!/bin/bash

echo "🚀 Iniciando despliegue a producción..."

# Verificar que estamos en la rama principal
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "❌ Error: Debes estar en la rama main para desplegar"
  exit 1
fi

# Instalar dependencias de producción
echo "📦 Instalando dependencias..."
npm ci --production

# Construir la aplicación
echo "🏗️ Construyendo la aplicación..."
npm run build

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

# Iniciar la aplicación en modo producción
echo "🌟 Iniciando la aplicación en modo producción..."
PORT=8000 npm run start

echo "✅ Despliegue completado exitosamente!"
