package com.cognizant.jwtauth.controller;

import com.cognizant.jwtauth.model.AuthenticationResponse;
import com.cognizant.jwtauth.service.UserValidationService;
import com.cognizant.jwtauth.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private UserValidationService userValidationService;

    private final JwtUtil jwtUtil = new JwtUtil();

    @GetMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestHeader(value = "Authorization", required = false) String authorizationHeader) {
        logger.info("START - authenticate()");

        if (!StringUtils.hasText(authorizationHeader) || !authorizationHeader.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String base64Credentials = authorizationHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);
        String[] parts = credentials.split(":", 2);

        if (parts.length != 2) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String username = parts[0];
        String password = parts[1];

        if (!userValidationService.validateUser(username, password)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = jwtUtil.generateToken(username);
        AuthenticationResponse response = new AuthenticationResponse(token);
        logger.info("END - authenticate()");
        return ResponseEntity.ok(response);
    }
}
