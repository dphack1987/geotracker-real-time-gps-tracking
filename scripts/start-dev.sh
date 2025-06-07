#!/bin/bash

# Kill any process using port 8000
lsof -ti:8000 | xargs kill -9 2>/dev/null

# Start Next.js development server
npm run dev &

# Wait for Next.js server to start
echo "Waiting for Next.js server to start..."
until curl -s http://localhost:8000 > /dev/null; do
  sleep 1
done

echo "✨ Development server is running!"
echo "📱 Test page available at: http://localhost:8000/test.html"
echo "🚀 API endpoints available at: http://localhost:8000/api/*"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for Ctrl+C
wait
