@echo off
set "PATH=C:\Users\gra4i\AppData\Local\Programs\node-v22.14.0-win-x64;C:\Users\gra4i\AppData\Local\Programs\bin;%PATH%"
cd /d "%~dp0"
call npx docusaurus start --port 3010
