package BuisnessLayer.User;

import java.util.ArrayList;

import BuisnessLayer.BallotObjects.Ballot;

public class Society {
    
    private String name;
    private ArrayList<User> users;
    private ArrayList<Ballot> ballots;

    /**
     * Instantiate a new Society
     * @param name String society name
     * @param users Arraylist of the users
     * @param ballots Arraylist of the total ballots
     */
    public Society(
        String name,
        ArrayList<User> users,
        ArrayList<Ballot> ballots
    ) {
        this.name = name;
        this.users = users;
        this.ballots = ballots;
    }

    // getters and setters
    /**
     * Get the society name
     * @return String society name
     */
    public String getName() { return name; }
    /**
     * Get the society users
     * @return ArrayList of users
     */
    public ArrayList<User>  getUsers() { return users; }
    /**
     * Get the society's ballots
     * @return ArrayList of ballots
     */
    public ArrayList<Ballot> getBallots() { return ballots; }
    /**
     * Set the society name
     * @param name society name
     */
    public void setName( String name ) { }
    /**
     * Set the society users
     * @param users of users
     */
    public void setUsers( ArrayList<User> users) { }
    /**
     * Set the society's ballots
     * @param ballots of ballots
     */
    public void setBallots( ArrayList<Ballot> ballots ) { }


    /**
     * return the active ballots that people can vote in
     * @return Arraylist of ballots that are open for voting
     */
    public ArrayList<Ballot> getActiveBallots() { return ballots; }

    /**
     * Average number of voting users over the history of the society
     * @return Double of the avg voting users
     */
    public Double averageNumberOfVotingUsers() { return 0.0; }
}
