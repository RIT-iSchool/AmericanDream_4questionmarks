package com.example.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/ballots")
public class BallotController {

    @Autowired
    private BallotService ballotService;

    @GetMapping
    public ResponseEntity<List<Ballot>> getAllBallots() {
        try {
            List<Ballot> ballots = ballotService.getAllBallots();
            if (ballots.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(ballots);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
