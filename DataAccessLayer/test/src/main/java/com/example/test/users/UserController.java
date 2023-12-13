package com.example.test.users;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.societies.Society;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable int userId) {
        return userRepository.getUserById(userId);
    }
    
    @GetMapping
    public List<User> getAllUsers(@RequestParam(required = false) Integer societyId) {
        if (societyId != null) {
            return userRepository.findBySocietyId(societyId);
        }
        return userRepository.getAllUsers();
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
    	User savedUser = userRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    
    @GetMapping("/searchBySociety")
    public List<User> searchUsersBySociety(@RequestParam int societyId, @RequestParam(required = false) String searchTerm) {
        if (searchTerm == null || searchTerm.trim().isEmpty()) {
            return userRepository.findBySocietyId(societyId);
        }
        return userRepository.findBySocietyIdAndSearchTerm(societyId, searchTerm);
    }
}
