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

}
