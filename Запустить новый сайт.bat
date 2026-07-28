@echo off
set "PATH=C:\Users\gra4i\AppData\Local\Programs\node-v22.14.0-win-x64;C:\Users\gra4i\AppData\Local\Programs\bin;%PATH%"
cd /d "%~dp0site-new"
echo Запускаю сайт Академии Claude...
echo Через несколько секунд браузер откроется сам на http://localhost:3000
echo Чтобы остановить сайт - закройте это окно.
echo.
call npx docusaurus start
if errorlevel 1 (
  echo.
  echo Что-то пошло не так. Скопируйте текст выше и отправьте разработчику.
  pause
)
