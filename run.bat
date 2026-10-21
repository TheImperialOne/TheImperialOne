@echo off
setlocal
cd /d "%~dp0"
title TheImperialOne - Portfolio Dev Server

echo ==========================================================
echo   TheImperialOne ^| Portfolio
echo   React development server
echo ==========================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found on your PATH.
    echo         Install the LTS build from https://nodejs.org/,
    echo         then close this window and run it again.
    echo.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo [SETUP] Dependencies not installed yet.
    echo         Running npm install. This only happens once and
    echo         can take a couple of minutes.
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed. Read the messages above.
        pause
        exit /b 1
    )
    echo.
    echo [SETUP] Done installing dependencies.
    echo.
)

echo [INFO]  Starting the dev server on http://localhost:3000
echo [INFO]  The browser opens automatically.
echo [INFO]  Press Ctrl+C in this window to stop the server.
echo [INFO]  Leave this window open while you work.
echo.

call npm start

echo.
echo ==========================================================
echo   Server stopped. You can close this window.
echo ==========================================================
pause