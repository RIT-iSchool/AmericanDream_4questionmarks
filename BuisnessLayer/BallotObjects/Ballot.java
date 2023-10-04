package BuisnessLayer.BallotObjects;

import java.util.ArrayList;

/**
 * Represents a Ballot 
 * 
 * @author Maija Philip
 * @version 1.0
 * @since 2023-10-04
 */
public class Ballot {
    
    private String name;
    private String electionStart;
    private String electionEnd;
    private ArrayList<OfficerQuestion> officerQuestions;
    private ArrayList<Initiative> ballotInitiatives;

    /**
     * Instantiates a new Ballot
     * @param name name of the election, required
     * @param electionStart start date in yyyy-mm-dd format, required
     * @param electionEnd end date in yyyy-mm-dd format, requred
     * @param officerQuestions ArrayList of Officer Election questions
     * @param balloInitiatives ArrayList of Ballot Initiatives
     */
    public Ballot(
        String name, 
        String electionStart, 
        String electionEnd, 
        ArrayList<OfficerQuestion> officerQuestions, 
        ArrayList<Initiative> balloInitiatives) {

            this.name = name;
            this.electionStart = electionStart;
            this.electionEnd = electionEnd;
            this.officerQuestions = officerQuestions;
            this.ballotInitiatives = balloInitiatives;
    }
}
