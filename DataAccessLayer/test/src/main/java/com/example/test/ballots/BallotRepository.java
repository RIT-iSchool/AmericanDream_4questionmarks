package com.example.test.ballots;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
public interface BallotRepository extends CrudRepository<Ballot, Integer> {
	@Query("SELECT * FROM Ballot")
    List<Ballot> getAllBallots();

    @Query("SELECT * FROM Ballot b WHERE b.BallotID = :ballotId")
	Ballot getBallotById(int ballotId);
}

