package BuisnessLayer.User;

import java.util.ArrayList;

import BuisnessLayer.BallotObjects.Ballot;

public class Member extends User {

    /**
     * Instantiates a Member type user by inheriting the user class attributes
     * @param firstname first name of user
     * @param lastname last name of user
     * @param password chosen password
     * @param society society the user belongs to
     * @param email the email of the user
     * @param id the id of the user
     */
    public Member(String firstname, String lastname, String password, Society society, String email, Integer id) {
        super(firstname, lastname, password, email, society, id);
    }
    /**
     * Gets a list of the electoins the user can vote in
     * @return List of elections a user can vote in, returns an empty list if they have none
     */
    public ArrayList<Ballot> getElectionsToVoteIn() {
        return new ArrayList<>();
    }   
    
}
