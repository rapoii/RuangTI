#!/usr/bin/env bash
set -e

echo "=== 1. Building Frontend (Svelte 5 + Vite) ==="
cd frontend
npm run build
cd ..

echo "=== 2. Syncing Assets to server/dist ==="
rm -rf server/dist
cp -r frontend/dist server/dist

echo "=== 3. Compiling Single Binary ruangti.exe (Go) ==="
cd server
/d/Software/go/bin/go build -ldflags="-s -w" -o ../ruangti.exe .
cd ..

echo "=== 4. Verifikasi Binary ==="
ls -lh ruangti.exe
echo "Build selesai! Binary siap dijalankan: ./ruangti.exe"
