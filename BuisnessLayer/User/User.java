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
     * Gets a list of the electoins the user can vote in
     * @return List of elections a user can vote in, returns an empty list if they have none
     */
    public ArrayList<Ballot> getElectionsToVoteIn() {
        return new ArrayList<>();
    }

}
