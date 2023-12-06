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

    private PreparedStatementCreator createPreparedStatement(String sql, Object... params) {
        return connection -> {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < params.length; i++) {
                preparedStatement.setObject(i + 1, params[i]);
            }
            return preparedStatement;
        };
    }

    private ResultSetExtractor<User> userResultSetExtractor() {
        return rs -> {
            if (rs.next()) {
                User user = new User();
                user.setUserID(rs.getInt("userID"));
                user.setFirstName(rs.getString("fName"));
                user.setLastName(rs.getString("lName"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                // Additional fields if necessary
                return user;
            }
            return null;
        };
    }

    public User getUserById(int id) {
        String sql = "SELECT * FROM User WHERE userID = ?";
        return jdbcTemplate.query(createPreparedStatement(sql, id), userResultSetExtractor());
    }

    public User findByEmail(String email) {
        String sql = "SELECT * FROM User WHERE Email = ?";
        return jdbcTemplate.query(createPreparedStatement(sql, email), userResultSetExtractor());
    }

    // Other possible methods for CRUD operations
}
