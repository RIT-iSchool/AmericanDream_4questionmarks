package com.example.demo;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class UserRepository {
    private final JdbcTemplate jdbcTemplate;

    public UserRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public User getUserById(int id) {
        String sql = "SELECT * FROM User WHERE userID = ?";

        PreparedStatementCreator preparedStatementCreator = connection -> {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setLong(1, id);
            return preparedStatement;
        };
        System.out.println('\n' +sql);
        ResultSetExtractor<User> resultSetExtractor = rs -> {
            if (rs.next()) {
                User user = new User();
                user.setUserID(rs.getLong("userID"));
                user.setfName(rs.getString("fName"));
                user.setlName(rs.getString("lName"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                
                // You may need to fetch and set the associated Society object as well

                return user;
            }
            return null;
        };

        return jdbcTemplate.query(preparedStatementCreator, resultSetExtractor);
    }

    // Other methods for CRUD operations
}



