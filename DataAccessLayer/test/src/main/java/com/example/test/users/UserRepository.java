package com.example.test.users;


import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.test.users.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	@Query("SELECT * FROM User u WHERE u.Email = :email")
	User findByEmail(String email);
	
	@Query("SELECT * FROM User u WHERE u.UserID = :userId")
	User getUserById(int userId);
	
    @Query("SELECT * FROM User u WHERE u.SocietyID = :societyId")
    List<User> findBySocietyId(int societyId);
	
	@Query("SELECT * FROM User")
	List<User> getAllUsers();
	
	@Query("SELECT * FROM User u WHERE u.SocietyID = :societyId AND (lower(u.fName) LIKE lower(concat('%', :searchTerm, '%')) OR lower(u.lName) LIKE lower(concat('%', :searchTerm, '%')))")
	List<User> findBySocietyIdAndSearchTerm(@Param("societyId") int societyId, @Param("searchTerm") String searchTerm);

}



