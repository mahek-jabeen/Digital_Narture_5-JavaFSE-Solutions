# Spring Learn

## Project Name
Spring Learn

## Objective
Create a Spring Web Project using Maven.

## Project Structure
- src/main/java: Contains all Java source code.
- src/main/resources: Contains configuration files such as application.properties and static resources.
- src/test/java: Contains unit and integration test classes.

## SpringLearnApplication.java
The main entry point of the application. It starts the Spring Boot application using SpringApplication.run() and logs a startup message.

## @SpringBootApplication
@SpringBootApplication is a convenience annotation that combines:
- @Configuration: Marks the class as a source of Spring bean definitions.
- @EnableAutoConfiguration: Enables Spring Boot auto-configuration.
- @ComponentScan: Scans the package for Spring components.

## pom.xml
The Maven build file defines:
- Dependencies: Spring Web and Spring Boot DevTools.
- Plugins: Spring Boot Maven plugin for packaging and running the application.
- Dependency Management: Spring Boot parent manages compatible dependency versions.
- Dependency Hierarchy: Maven resolves transitive dependencies automatically from the declared starter dependencies.
