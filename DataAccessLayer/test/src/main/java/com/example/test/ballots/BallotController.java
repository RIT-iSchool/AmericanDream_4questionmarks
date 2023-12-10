/**package com.example.test.ballots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/ballots")
public class BallotController {

    private static final Logger logger = LoggerFactory.getLogger(BallotController.class);

    @Autowired
    private BallotService ballotService;

    @GetMapping
    public ResponseEntity<List<Ballot>> getAllBallots() {
        logger.info("Received request to get all ballots");
        try {
            List<Ballot> ballots = ballotService.getAllBallots();
            if (ballots.isEmpty()) {
                logger.info("No ballots found");
                return ResponseEntity.noContent().build();
            }
            logger.info("Returning {} ballots", ballots.size());
            return ResponseEntity.ok(ballots);
        } catch (Exception e) {
            logger.error("Error retrieving ballots", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
**/

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

    @GetMapping
    public List<Ballot> getAllBallots() {
        return ballotRepository.getAllBallots();
    }
}