package com.example.test.ballots;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface BallotOptionRepository extends CrudRepository<BallotOption, Integer> {
	
	@Query("SELECT * FROM Ballot_Option")
	List<BallotOption> getAllBallotOptions();
}