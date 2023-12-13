package com.example.test.societies;

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

import com.example.test.users.User;



@RestController
@RequestMapping("/societies")
public class SocietyController {
    private final SocietyRepository societyRepository;

    public SocietyController(SocietyRepository societyRepository) {
        this.societyRepository = societyRepository;
    }
    
    @GetMapping("/{societyId}")
    public Society getSocietyById(@PathVariable int societyId) {
        return societyRepository.getSocietyById(societyId);
    }
    
    @GetMapping
    public List<Society> getAllSocieties() {
        return societyRepository.getAllSocieties();
    }
    
    @PostMapping
    public ResponseEntity<Society> createSociety(@RequestBody Society society) {
        Society savedSociety = societyRepository.save(society);
        return new ResponseEntity<>(savedSociety, HttpStatus.CREATED);
    }
    
    @GetMapping("/search")
    public List<Society> searchSocieties(@RequestParam String searchTerm) {
        return societyRepository.searchByName(searchTerm);
    }
}
