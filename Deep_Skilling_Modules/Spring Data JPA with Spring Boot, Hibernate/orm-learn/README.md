# ORM Learn

## Objective

Demonstrate Spring Boot, Spring Data JPA, Hibernate, Repository, Service Layer, Entity Mapping, and MySQL.

## Technology Stack

- Java 17
- Spring Boot 3
- Spring Data JPA
- Hibernate
- MySQL 8
- Maven
- SLF4J Logging

## Project Description

This project is a demo application for Spring Data JPA and Hibernate using a `Country` entity and repository.

## Database Configuration

- Database: `ormlearn`
- URL: `jdbc:mysql://localhost:3306/ormlearn`
- Username: `root`
- Password: `root`
- Hibernate DDL auto: `validate`

## Running the application

1. Start MySQL and create the database `ormlearn`.
2. Run `mvn clean install`.
3. Run the application with `mvn spring-boot:run`.

Expected console output includes:

- `Inside main`
- `Start`
- `countries=[Country(code=IN,name=India), Country(code=US,name=United States of America)]`
- `End`
