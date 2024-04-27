# Use a base image with Eclipse Temurin JDK 17 on Alpine Linux
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project files and pom.xml for dependency resolution
COPY pom.xml .

# Copy the application source code
COPY src src

# Build the application with Maven
RUN mvn clean package

# Copy the compiled JAR file into the container
COPY target/backend-0.0.1-SNAPSHOT.jar application.jar

# Specify the command to run the application
CMD  ["java", "-jar", "application.jar"]
