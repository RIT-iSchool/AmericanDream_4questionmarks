package com.example.test.ballots;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface BallotInitiativeRepository extends CrudRepository<BallotInitiative, Integer> {
	
	@Query("SELECT * FROM Ballot_Initiative")
	List<BallotInitiative> getAllBallotInitiatives();
	
}
