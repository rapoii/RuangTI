@echo off
title RuangTI Production Server - Single Binary Go + Cloudflare Tunnel
echo ========================================================
echo   RUANGTI - INDUSTRIAL ENGINEERING AI WORKSPACE
echo   Starting High-Performance Single Binary Production (24/7)
echo ========================================================
echo.

set WORKDIR=D:\Software\Hermes Workspace\projects\websites\RuangTI
set CLOUDFLARED_BIN=D:\Software\cloudflared\cloudflared.exe

cd /d "%WORKDIR%"

echo [1/2] Starting RuangTI Single Binary (Port 3005 ^& 8000)...
start "RuangTI Single Binary" /min cmd /c "ruangti.exe --host 0.0.0.0 --port 3005 --rag-db backend/data/ruangti_rag.db --app-db backend/data/ruangti_app.db --mimoly http://127.0.0.1:8080/v1"

echo [2/2] Starting Cloudflare Named Tunnel (ruangti.varevastudio.tech)...
echo.
echo ========================================================
echo   Production is running! Keep this window open or minimized.
echo   Local Address : http://localhost:3005
echo   Public Domain : https://ruangti.varevastudio.tech
echo ========================================================
echo.

set /p TOKEN=<tunnel_token.txt
"%CLOUDFLARED_BIN%" tunnel run --token %TOKEN%
