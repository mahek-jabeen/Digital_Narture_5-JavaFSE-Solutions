package com.cognizant.jwtauth.service;

import org.springframework.stereotype.Service;

@Service
public class UserValidationService {

    public boolean validateUser(String username, String password) {
        return "user".equals(username) && "pwd".equals(password);
    }
}
