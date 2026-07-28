@echo off
set "PATH=C:\Users\gra4i\AppData\Local\Programs\node-v22.14.0-win-x64;C:\Users\gra4i\AppData\Local\Programs\bin;%PATH%"
cd /d "%~dp0site-new"
echo Starting Academy Claude site...
echo Browser will open in a few seconds at http://localhost:3000
echo To stop the site, close this window.
echo.
call npx docusaurus start
echo.
echo Exit code: %errorlevel%
echo If you see an error above, take a screenshot and send it over.
pause
