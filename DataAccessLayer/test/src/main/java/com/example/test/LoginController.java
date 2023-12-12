package com.example.test;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.LoginService;


@RestController
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        logger.info("Attempting to login user with email: {}", user.getEmail());
        try {
            User authenticatedUser = loginService.authenticateUser(user.getEmail(), user.getPassword());
            logger.info("User " + authenticatedUser);
            if (authenticatedUser != null) {
                logger.info("User authenticated successfully");
                return ResponseEntity.ok().body(authenticatedUser);
            } else {
                logger.warn("Login attempt failed for user with email: {}", user.getEmail());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
            }
        } catch (Exception e) {
            logger.error("Login attempt resulted in an error for user with email: {}", user.getEmail(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to login, " + e.getMessage());
        }
    }
}

