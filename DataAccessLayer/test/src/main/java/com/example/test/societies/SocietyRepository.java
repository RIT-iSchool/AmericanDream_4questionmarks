package com.example.test.societies;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.test.users.User;



@Repository
public interface SocietyRepository extends CrudRepository<Society, Integer> {
	@Query("SELECT * FROM Society")
	List<Society> getAllSocieties();

	@Query("SELECT * FROM Society s WHERE lower(s.SocietyName) LIKE lower(concat('%', :searchTerm, '%'))")
	List<Society> searchByName(@Param("searchTerm") String searchTerm);
	
	@Query("SELECT * FROM Society s WHERE s.SocietyID = :societyId")
    Society getSocietyById(@Param("societyId") Integer societyId);
}