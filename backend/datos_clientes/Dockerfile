# Primera etapa: construir con Maven
FROM openjdk:17-jdk-slim as build

# Instalar Maven y utilidades necesarias
RUN apt-get update && apt-get install -y maven

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Dar permisos de ejecución a mvnw
RUN chmod +x mvnw

# Ejecutar Maven para construir la aplicación
RUN mvn clean package -DskipTests

# Segunda etapa: imagen final
FROM openjdk:17-jdk-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar el JAR generado desde la primera etapa
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto 8080
EXPOSE 8080

# Definir el comando de entrada
ENTRYPOINT ["java", "-jar", "app.jar"]

