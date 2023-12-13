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

@RestController
@RequestMapping("/ballotOptions")
public class BallotOptionController {

    private final BallotOptionRepository ballotOptionRepository;

    public BallotOptionController(BallotOptionRepository ballotOptionRepository) {
        this.ballotOptionRepository = ballotOptionRepository;
    }
    
    @GetMapping
    public List<BallotOption> getAllBallotOptions() {
        return ballotOptionRepository.getAllBallotOptions();
    }
    
    @PostMapping
    public ResponseEntity<BallotOption> createBallotOption(@RequestBody BallotOption ballotOption) {
    	BallotOption savedBallotOption = ballotOptionRepository.save(ballotOption);
        return new ResponseEntity<>(savedBallotOption, HttpStatus.CREATED);
    }
}
