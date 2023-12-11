package com.example.test.societies;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/societies")
public class SocietyController {
    private final SocietyRepository societyRepository;

    public SocietyController(SocietyRepository societyRepository) {
        this.societyRepository = societyRepository;
    }
    
    @GetMapping
    public List<Society> getAllSocieties() {
        return societyRepository.getAllSocieties();
    }
    
    @PostMapping
    public Society createSociety(@RequestBody Society society) {
        return societyRepository.save(society);
    }
    
    @GetMapping("/search")
    public List<Society> searchSocieties(@RequestParam String searchTerm) {
        return societyRepository.searchByName(searchTerm);
    }
}
