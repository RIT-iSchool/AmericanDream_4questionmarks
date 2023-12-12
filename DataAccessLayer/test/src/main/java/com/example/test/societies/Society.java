package com.example.test.societies;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.relational.core.mapping.Column;

@Table("Society") 
public class Society {

    @Id
    @Column("SocietyID")
    private Integer societyID; 

    @Column("SocietyName") 
    private String societyName;

    @Column("SocietyDesc") 
    private String societyDesc;

    // Constructors, getters, setters...

    public Society() {
        // Default constructor
    }

    public Society(String societyName, String societyDesc) {
        this.societyName = societyName;
        this.societyDesc = societyDesc;
    }

    // Getters and Setters
    
    /**
     * Get the society ID
     * @return String society ID
     */
    public Integer getSocietyID() {
        return societyID;
    }
    
    /**
     * Sets the society ID
     * @return String society ID
     */
    public void setSocietyID(Integer societyID) {
        this.societyID = societyID;
    }
    /**
     * Set the society name
     * @return String society name
     */
    public String getSocietyName() {
        return societyName;
    }
    /**
     * Sets the society name
     * @return String society name
     */
    public void setSocietyName(String societyName) {
        this.societyName = societyName;
    }
    /**
     * Get the society description
     * @return String society name
     */
    public String getSocietyDesc() {
        return societyDesc;
    }
    /**
     * Sets the society description
     * @return String society name
     */
    public void setSocietyDesc(String societyDesc) {
        this.societyDesc = societyDesc;
    }

}

