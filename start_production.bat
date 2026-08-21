@echo off
title RuangTI Full Production Stack - Startup Runner
echo ========================================================
echo   RUANGTI - INDUSTRIAL ENGINEERING AI WORKSPACE
echo   Starting High-Performance Production Stack (24/7)
echo ========================================================
echo.

set WORKDIR=D:\Software\Hermes Workspace\projects\web\RuangTI
set CLOUDFLARED_BIN=D:\Software\cloudflared\cloudflared.exe

cd /d "%WORKDIR%"

echo [1/3] Checking & Starting FastAPI Backend (Port 8000)...
start "RuangTI Backend (FastAPI)" /min cmd /c "uvicorn backend.app.main:app --host 0.0.0.0 --port 8000"

echo [2/3] Starting Next.js Production Server (Port 3005)...
start "RuangTI Frontend (Next.js Prod)" /min cmd /c "npm run start -- -p 3005"

echo [3/3] Starting Cloudflare Public Secure Gateway...
echo.
echo ========================================================
echo   Stack is running! Keep this window open or minimized.
echo   Local Address: http://localhost:3005
echo ========================================================
echo.

"%CLOUDFLARED_BIN%" tunnel --url http://localhost:3005
