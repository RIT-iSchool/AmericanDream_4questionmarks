package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.demo")
@EntityScan("com.example.demo")
public class DemoApplication {

	public static void main(String[] args) {
        String plaintextPassword = "password123"; 
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedPassword = encoder.encode(plaintextPassword);
        System.out.println("Hashed password: " + hashedPassword);
        
		SpringApplication.run(DemoApplication.class, args);
	}

}
