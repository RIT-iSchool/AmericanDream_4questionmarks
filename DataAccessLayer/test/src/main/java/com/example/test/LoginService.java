package com.example.test;

import com.example.test.users.UserRepository;
import com.example.test.users.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class LoginService {

    private static final Logger logger = LoggerFactory.getLogger(LoginService.class);
	
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User authenticateUser(String email, String password) {
        logger.debug("Authenticating user with email: {}", email);
        User user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            logger.debug("User authentication successful for email: {}", email);
            return user;
        }
        logger.debug("User authentication failed for email: {}", email);
        return null;
    }
}

