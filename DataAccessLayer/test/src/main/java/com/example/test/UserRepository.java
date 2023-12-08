package com.example.test;


import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.test.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	@Query("SELECT * FROM User u WHERE u.Email = :email")
    User findByEmail(String email);
}


