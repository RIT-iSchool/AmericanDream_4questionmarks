package BuisnessLayer.User;

public class Employee extends User {
    
    private String firstname;
    private String lastname;
    private String email;
    private Society society;
    private Integer id;

    /**
     * Instantiates an Employee type user
     * @param firstname first name of user
     * @param lastname last name of user
     * @param password chosen password
     * @param society society the user belongs to
     * @param email the email of the user
     */
    public Employee(
        String firstname,
        String lastname,
        String password, 
        Society society,
        String email
        ) {
        this.society = society;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = -1;
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
