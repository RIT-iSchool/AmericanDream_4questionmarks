package BuisnessLayer.BallotObjects;

import java.util.ArrayList;
/**
 * This represents a Ballot Initiative
 * 
 * @author Maija Philip
 * @version 1.0
 * @since 2023-10-04
 */
public class Initiative {
    
    private String description;
    private ArrayList<String> responses;

    /**
     * Instantiates an Initiative object
     * @param desctiption description of the initiative
     * @param responses the responses available for the user to select
     */
    public Initiative(String desctiption, ArrayList<String> responses) {

        this.description = desctiption;
        this.responses = responses;
    }

    // getters and setters
    /**
     * Get initiative description
     * @return String description of the initiative
     */
    public String getDesc() { return description; }
    /**
     * Get all of the possible responses
     * @return ArrayList of all the possible responses
     */
    public ArrayList<String> getResponses() { return responses; }
    /**
     * Set initiative description
     * @param description description of the initiative
     */
    public void setDesc( String description ) { }
    /**
     * Set all of the possible responses
     * @param responses of all the possible responses
     */
    public void setResponses( ArrayList<String> responses) { }

    /**
     * This method will validate a user's choice to see if it is a valid option and store the vote if successfull
     * @param response the response a user has chosed to vote for
     * @return Boolean Wether the vote is valid.
     */
    public Boolean vote(String response) {
        return false;
    }

}
