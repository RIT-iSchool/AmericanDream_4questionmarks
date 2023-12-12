package com.example.test.users;


import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Table;

import com.example.test.societies.Society;

import org.springframework.data.relational.core.mapping.Column;

@Table("User") 
public class User {

    @Id
    @Column("UserID")
    private Integer userID; 

    @Column("fName") 
    private String firstname;

    @Column("lName") 
    private String lastname;

    @Column("Email") 
    private String email;

    @Column("Password") 
    private String password;
    

    @Column("SocietyID")
    private Integer societyId;

	private Society society;

    // Constructors, getters, setters...

    public User() {
        // Default constructor
    }
    
    // Getters and Setters

    /**
     * Gets the user's ID.
     * @return int representing the user's ID.
     */
    public int getUserID() {
        return userID;
    }

    /**
     * Sets the user's ID.
     * @param userID The new user ID.
     */
    public void setUserID(int userID) {
        this.userID = userID;
    }

    /**
     * Gets the user's first name.
     * @return A String representing the user's first name.
     */
    public String getFirstName() { 
        return firstname; 
    }

    /**
     * Sets the user's first name.
     * @param firstname The new first name of the user.
     */
    public void setFirstName(String firstname) {
        this.firstname = firstname;
    }

    /**
     * Gets the user's last name.
     * @return A String representing the user's last name.
     */
    public String getLastName() { 
        return lastname; 
    }

    /**
     * Sets the user's last name.
     * @param lastname The new last name of the user.
     */
    public void setLastName(String lastname) {
        this.lastname = lastname;
    }

    /**
     * Gets the user's email address.
     * @return A String representing the user's email.
     */
    public String getEmail() { 
        return email; 
    }

    /**
     * Sets the user's email address.
     * @param email The new email address of the user.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets the user's password.
     * @return A String representing the user's password.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the user's password.
     * @param password The new password of the user.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Gets the society to which the user belongs.
     * @return The Society object representing the society.
     */
    public Society getSociety() { 
        return society; 
    }

    /**
     * Sets the society to which the user belongs.
     * @param society The new Society object for the user.
     */
    public void setSociety(Society society) {
        this.society = society;
    }
}
