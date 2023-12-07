package com.example.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class TestApplication {

	public static void main(String[] args) {
        String plaintextPassword = "password123"; 
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedPassword = encoder.encode(plaintextPassword);
        System.out.println("Hashed password: " + hashedPassword);
		SpringApplication.run(TestApplication.class, args);
	}

}
