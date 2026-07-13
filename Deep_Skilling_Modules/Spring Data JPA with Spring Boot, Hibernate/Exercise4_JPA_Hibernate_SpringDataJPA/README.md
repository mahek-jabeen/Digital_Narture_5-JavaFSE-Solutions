# JPA, Hibernate, and Spring Data JPA

## Objective

Demonstrate the differences between:

1. Java Persistence API (JPA)
2. Hibernate
3. Spring Data JPA

using explanation and simple code examples.

## Overview

- **JPA** is a specification that defines how Java objects are mapped to relational databases.
- **Hibernate** is a popular JPA implementation and ORM provider.
- **Spring Data JPA** is a Spring abstraction on top of JPA that reduces boilerplate repository code.

## Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|---|---|---|---|
| Definition | Specification for persistence | ORM implementation | Abstraction over JPA implementations |
| Implementation | None | Yes | Yes, built on JPA |
| Transaction Management | Managed by JPA providers or container | Provided by Hibernate | Managed by Spring with `@Transactional` |
| Boilerplate Code | High | Moderate | Low |
| Ease of Use | Medium | Medium | High |
| Performance | Based on provider | Good, optimized implementation | Similar to provider, with extra convenience |
| Advantages | Standard API | Mature ORM features, caching, dialect support | Repository abstraction, query derivation, paging |
| Disadvantages | No implementation | Adds complexity, learning curve | Hides some internals, added abstraction |
| Use Cases | Standard persistence APIs | Full ORM use cases | Rapid repository development |

## Definitions

- **JPA**: A Java specification for object-relational mapping and persistence.
- **Hibernate**: A concrete implementation of JPA and a full-featured ORM framework.
- **Spring Data JPA**: A Spring module that builds on JPA implementations like Hibernate to simplify repository development.

## Technology Stack

- Java 17
- Spring Boot 3
- Spring Data JPA
- Hibernate
- MySQL Driver
- Maven

## Running the Project

1. Ensure the project compiles with `mvn clean install`.
2. The code examples in `JpaExample`, `HibernateExample`, and `SpringDataJpaExample` illustrate conceptual differences.

## Conclusion

JPA is the specification layer, Hibernate is the implementation, and Spring Data JPA is the Spring data abstraction that makes repository access easier.
