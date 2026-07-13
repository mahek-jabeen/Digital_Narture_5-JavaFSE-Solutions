package com.cognizant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Exercise4JpaApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(Exercise4JpaApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(Exercise4JpaApplication.class, args);
        LOGGER.info("Difference between");
        LOGGER.info("JPA");
        LOGGER.info("Hibernate");
        LOGGER.info("Spring Data JPA");
        LOGGER.info("printed successfully.");
    }
}
