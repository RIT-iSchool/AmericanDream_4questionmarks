package com.example.test.ballots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BallotService {

    @Autowired
    private BallotRepository ballotRepository;

    public List<Ballot> getAllBallots() {
        return (List<Ballot>) ballotRepository.findAll();
    }
}
