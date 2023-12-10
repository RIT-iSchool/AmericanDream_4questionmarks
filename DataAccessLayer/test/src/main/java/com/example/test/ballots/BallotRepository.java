package com.example.test.ballots;
/**
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BallotRepository extends CrudRepository<Ballot, Integer> {
    @Query("SELECT * FROM Ballot")
    List<Ballot> findAllBallots();
}*/

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
public interface BallotRepository extends CrudRepository<Ballot, Integer> {
	@Query("SELECT * FROM Ballot")
    List<Ballot> getAllBallots();
}