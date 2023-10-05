package BuisnessLayer;

import java.util.ArrayList;

import BuisnessLayer.User.Society;

public class System {
    
    private static Integer loggedInUsers;
    private static ArrayList<Society> societies;

    /**
     * Get the number of logged in users
     * @return Integer of logged in users
     */
    public static Integer  getNumLoggedInUsers() { return loggedInUsers; }
    /**
     * Get the number of active elections
     * @return Integer of active elections
     */
    public static Integer getActiveElections() { return 0; }

    /**
     * record that a user has logged in
     */
    public static void loginUser() {}
    /**
     * Record that a user has logged out
     */
    public static void logOutUser() {}

    /**
     * Add a society to the system
     * Usually this is called in the constructor of society
     * @param society the society that is going to be added to the system
     */
    public static void addSociety(Society society)  {}

}
