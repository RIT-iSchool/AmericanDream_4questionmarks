package BuisnessLayer.User;

import java.util.ArrayList;

import BuisnessLayer.BallotObjects.*;

/**
 * Represents a generic User
 * 
 * @author Maija Philip
 * @version 1.0
 * @since 2023-10-04
 */
public abstract class User {
    
    /**
     * Validates an attempt to login, seeing if the user exists in the database
     * @param username attempted username
     * @param password attempted password
     * @return Boolean Wether the login credentials matched an existing user or not
     */
    public Boolean login(String username, String password) {
        return false;
    }

    /**
     * Logout a user
     * @return Boolean Was the logout successfull?
     */
    public Boolean logout() {
        return false;
    }

}
