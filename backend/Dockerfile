# Utiliza imagem do OpenJDK
FROM openjdk:17-jdk-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo JAR gerado
COPY target/*.jar app.jar

# Executa a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
