@echo off
goto:$Main

:$Main
setlocal EnableDelayedExpansion
    call npm install
    if errorlevel 1 goto:$MainError

    call npm run build
    if errorlevel 1 goto:$MainError

    call pwsh -File .\build.ps1 %*
    if errorlevel 1 goto:$MainError
    goto:$MainEnd

    :$MainError
        echo Hit error during build.
        goto:$MainEnd

    :$MainEnd
endlocal & exit /b %ERRORLEVEL%
