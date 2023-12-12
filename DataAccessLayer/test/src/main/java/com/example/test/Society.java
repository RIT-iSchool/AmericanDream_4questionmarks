package com.example.test;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.relational.core.mapping.Column;

@Table("Society") // Maps to the Society table in your database
public class Society {

    @Id
    @Column("SocietyID")
    private Integer societyID; // Matches the 'SocietyID' column

    @Column("SocietyName") // Maps the 'SocietyName' column
    private String societyName;

    @Column("SocietyDesc") // Maps the 'SocietyDesc' column
    private String societyDesc;

    // Spring Data JDBC doesn't directly support automatic mapping for one-to-many relationships like JPA. 
    // You would typically handle this at the service level or with custom queries.

    // Constructors, getters, setters...

    public Society() {
        // Default constructor
    }

    public Society(String societyName, String societyDesc) {
        this.societyName = societyName;
        this.societyDesc = societyDesc;
    }

    // Getters and Setters

    public Integer getSocietyID() {
        return societyID;
    }

    public void setSocietyID(Integer societyID) {
        this.societyID = societyID;
    }

    public String getSocietyName() {
        return societyName;
    }

    public void setSocietyName(String societyName) {
        this.societyName = societyName;
    }

    public String getSocietyDesc() {
        return societyDesc;
    }

    public void setSocietyDesc(String societyDesc) {
        this.societyDesc = societyDesc;
    }

    // The List<User> field is removed because Spring Data JDBC doesn't support automatic resolution of one-to-many relationships using collections. 
    // You'd handle the relationship between Society and User differently, possibly through service methods or custom queries.
}

