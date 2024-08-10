# Use an official Maven image to build the Spring Boot application
FROM maven:3.8.5-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project files and build the project
COPY movie-backend/pom.xml movie-backend/
COPY movie-backend/src movie-backend/src/
RUN mvn -f movie-backend/pom.xml clean package -DskipTests

# Use a lightweight OpenJDK image for the runtime
FROM openjdk:17-jdk-slim

# Expose the application port
EXPOSE 8080

# Copy the JAR file from the build stage to the runtime stage
COPY --from=build /app/movie-backend/target/movies-1.0.0.jar app.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
