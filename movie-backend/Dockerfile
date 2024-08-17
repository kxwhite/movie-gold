# Use an official Maven image to build the Spring Boot application
FROM maven:3.8.5-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project files and build the project
COPY ./pom.xml ./
COPY ./src ./src/
RUN mvn clean package -DskipTests

# Use a lightweight OpenJDK image for the runtime
FROM openjdk:17-jdk-slim

# Expose the application port (use 8080 but ensure Render sets the correct port dynamically)
EXPOSE 8080

# Copy the JAR file from the build stage to the runtime stage
COPY --from=build /app/target/movies-1.0.0.jar app.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
