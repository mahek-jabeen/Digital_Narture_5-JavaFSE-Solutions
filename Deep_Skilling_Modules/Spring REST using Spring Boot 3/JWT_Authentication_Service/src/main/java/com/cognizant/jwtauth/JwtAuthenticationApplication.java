package com.cognizant.jwtauth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtAuthenticationApplication {

    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(JwtAuthenticationApplication.class, args);
        logger.info("JWT Authentication Service Started");
    }
}
