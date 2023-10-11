package BuisnessLayer.User;

import java.util.ArrayList;

import BuisnessLayer.BallotObjects.*;

/**
 * Represents a generic User
 * 
 * @author Maija Philip, Steven Chen
 * @version 1.1
 * @since 2023-10-11
 */
public abstract class User {
    protected String firstname;
    protected String lastname;
    protected String email;
    protected String password;
    protected Society society;
    protected Integer id;
    
    /**
     * Instantiates an user
     * @param firstname first name of user
     * @param lastname last name of user
     * @param password chosen password
     * @param society society the user belongs to
     * @param email the email of the user
     * @param id the id of the user
     */

    public User(String firstname, String lastname, String password, Society society, String email, Integer id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.society = society;
        this.id = id;
    }
    
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
    
    // getters and setters
    /**
     * Get a user's society
     * @return Society 
     */
    public Society getSociety() { return society; }
    /**
     * get a user's email
     * @return String email
     */
    public String getEmail() { return email; }
    /**
     * Get a user's first name
     * @return String firstname
     */
    public String getFirstName() { return firstname; }
    /**
     * Get a user's last name
     * @return String last name
     */
    public String getLastName() { return lastname; }
    /**
     * Gets a user's id, will return -1 if it hasn't been set
     * @return Integer of users id
     */
    public Integer getId() { return id; }

    /**
     * set a user's society
     * @param society 
     */
    public void setSociety( Society society) { }
    /**
     * set a user's email
     * @param email email
     */
    public void setEmail( String email ) { }
    /**
     * Set a user's first name
     * @param firstname firstname
     */
    public void setFirstName( String firstname ) { }
    /**
     * Set a user's last name
     * @param lastname last name
     */
    public void setLastName( String lastname ) { }
    /**
     * Sets a user's id
     * @param id sets the new user id
     */
    public void setId( Integer id) { }

}
