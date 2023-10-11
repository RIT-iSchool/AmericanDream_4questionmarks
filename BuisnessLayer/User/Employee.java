package BuisnessLayer.User;

public class Employee extends User {
    /**
     * Instantiates a Employee type user by inheriting the user class attributes and functions
     * @param firstname first name of user
     * @param lastname last name of user
     * @param password chosen password
     * @param society society the user belongs to
     * @param email the email of the user
     * @param id the id of the user
     */
    public Employee(String firstname, String lastname, String password, Society society, String email, Integer id) {
        super(firstname, lastname, password, society, email, id);
    }

}
