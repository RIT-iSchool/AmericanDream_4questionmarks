package com.example.test;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BallotRepository extends CrudRepository<Ballot, Integer> {
   @Query("SELECT * FROM Ballot;")
}
