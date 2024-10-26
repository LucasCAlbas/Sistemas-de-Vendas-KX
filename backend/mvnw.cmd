@echo off
setlocal
set MAVEN_VERSION=3.8.1
set WRAPPER_JAR=.\.mvn\wrapper\maven-wrapper.jar

if exist "%WRAPPER_JAR%" (
    java -jar "%WRAPPER_JAR%" %*
) else (
    echo Maven Wrapper jar not found at "%WRAPPER_JAR%"
    exit /b 1
)
endlocal
