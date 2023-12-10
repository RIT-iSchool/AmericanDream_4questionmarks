package com.example.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BallotService {

    @Autowired
    private BallotRepository ballotRepository;

    public List<Ballot> getAllBallots() {
        List<Ballot> ballots = new ArrayList<>();
        ballotRepository.findAll().forEach(ballots::add);
        return ballots;
    }
}
