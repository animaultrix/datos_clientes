FROM openjdk:17-jdk-slim as build

# Crear directorio de trabajo
WORKDIR /app

# Copiar y compilar con Maven
COPY . . 
RUN ./mvnw clean package -DskipTests

# Segunda etapa: imagen final
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
