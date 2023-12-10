package com.example.test.ballots;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ballots")
public class BallotController {
    private final BallotRepository ballotRepository;

    public BallotController(BallotRepository ballotRepository) {
        this.ballotRepository = ballotRepository;
    }

    @GetMapping("/{ballotId}")
    public Ballot getBallotById(@PathVariable int ballotId) {
        return ballotRepository.getBallotById(ballotId);
    }

    @GetMapping
    public List<Ballot> getAllBallots() {
        return ballotRepository.getAllBallots();
    }
}