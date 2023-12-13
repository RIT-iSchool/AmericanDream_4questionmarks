package com.example.test.ballots;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.societies.Society;
import com.example.test.users.User;

@RestController
@RequestMapping("/ballotInitiatives")
public class BallotInitiativeController {

    private final BallotInitiativeRepository ballotInitiativeRepository;


    public BallotInitiativeController(BallotInitiativeRepository ballotInitiativeRepository) {
        this.ballotInitiativeRepository = ballotInitiativeRepository;
    }
    
    @GetMapping
    public List<BallotInitiative> getAllBallotInitiatives() {
        return ballotInitiativeRepository.getAllBallotInitiatives();
    }
    
    @PostMapping
    public ResponseEntity<BallotInitiative> createBallotInitiative(@RequestBody BallotInitiative ballotInitiative) {
    	BallotInitiative savedBallotInitiative = ballotInitiativeRepository.save(ballotInitiative);
        return new ResponseEntity<>(savedBallotInitiative, HttpStatus.CREATED);
    }
}
