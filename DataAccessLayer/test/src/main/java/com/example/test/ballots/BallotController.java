package com.example.test.ballots;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

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

    @PutMapping("/{ballotId}")
    public ResponseEntity<Ballot> updateBallot(@PathVariable int ballotId, @RequestBody Ballot ballotDetails) {
        Optional<Ballot> ballotOptional = ballotRepository.findById(ballotId);
        if (ballotOptional.isPresent()) {
            Ballot ballot = ballotOptional.get();
            updateBallotDetails(ballot, ballotDetails);
            ballotRepository.save(ballot);
            return ResponseEntity.ok(ballot);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private void updateBallotDetails(Ballot ballot, Ballot ballotDetails) {
        ballot.setBallotName(ballotDetails.getBallotName());
        ballot.setElectionStart(ballotDetails.getElectionStart());
        ballot.setElectionEnd(ballotDetails.getElectionEnd());
        ballot.setOffices(ballotDetails.getOffices());
        ballot.setSocietyId(ballotDetails.getSocietyId());
    }
}