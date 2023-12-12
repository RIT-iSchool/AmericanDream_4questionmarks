package com.example.test;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogoutController {

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Logged out");
    }
}

