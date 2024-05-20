# Use Maven Docker image for the build stage
FROM maven:3-eclipse-temurin-17-alpine as build

# Set working directory in the Docker image
WORKDIR /app

# Copy only the POM file to install dependencies
COPY pom.xml .
COPY src ./src
# Install project dependencies
RUN mvn clean package -Dmaven.test.skip=true

# Copy the rest of the application source code



# Second stage: Use smaller OpenJDK image for runtime
FROM eclipse-temurin:17.0.8.1_1-jdk-focal


# Set working directory in the Docker image
WORKDIR /app

# Copy the compiled JAR file from the build stage
COPY --from=build /app/target/tpinf462-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port used by the Spring Boot application
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
