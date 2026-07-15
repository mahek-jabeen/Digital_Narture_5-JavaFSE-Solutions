# Exercise 4 – REST Country Web Service

## Project Name
Exercise 4 – REST Country Web Service

## Objective
Create a REST API that returns a Country object loaded from Spring XML.

## Key Concepts
- @RestController
- @RequestMapping
- ApplicationContext
- Spring XML Bean Configuration
- JSON Conversion
- Jackson Library

## How Spring Boot Converts Java Objects to JSON
Spring Boot uses Jackson, which automatically serializes Java objects into JSON responses.

## How to Test
### 1. Browser
Open:
http://localhost:8083/country

### 2. Postman
- Method: GET
- URL: http://localhost:8083/country

## Viewing HTTP Headers
- Chrome Developer Tools → Network tab
- Postman → Headers tab

## Technology
- Java 17
- Spring Boot 3
- Spring Web
- Spring Context
- Maven
