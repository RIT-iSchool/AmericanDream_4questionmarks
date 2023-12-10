package com.example.test.ballots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BallotService {

    private static final Logger logger = LoggerFactory.getLogger(BallotService.class);

    @Autowired
    private BallotRepository ballotRepository;

    public List<Ballot> getAllBallots() {
        logger.info("Fetching all ballots from the database");
        List<Ballot> ballots = new ArrayList<>();
        try {
            ballotRepository.findAll().forEach(ballots::add);
        } catch (Exception e) {
            logger.error("Error occurred while fetching ballots from the database", e);
        }
        return ballots;
    }
}
