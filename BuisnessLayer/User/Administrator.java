package BuisnessLayer.User;

public class Administrator extends Employee {

    /**
     * Instantiates an Employee type user
     * @param firstname first name of user
     * @param lastname last name of user
     * @param password chosen password
     * @param society society the user belongs to
     * @param email the email of the user
     */
    public Administrator(String firstname, String lastname, String password, Society society, String email) {
        super(firstname, lastname, password, society, email);
        
    }
    
}
