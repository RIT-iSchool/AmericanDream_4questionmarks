package BuisnessLayer.BallotObjects;

import java.util.ArrayList;

/**
 * Represents a ballot question for an officer position
 * 
 * @author Maija Philip
 * @version 1.0
 * @since 2023-10-04
 */
public class OfficerQuestion {
 
    private String officeName;
    private ArrayList<Candidate> candidates;
    private Integer numVotes;

    /**
     * Create an OfficerQuestion with all of this information, leave empty if it is not provided.
     * @param officeName name of the position being voted upon
     * @param candidates list of the candidates in the running for this position
     * @param numVotes amount of candidates a user can vote for
     */
    public OfficerQuestion(
        String officeName,
        ArrayList<Candidate> candidates,
        Integer numVotes
    ) {

        this.officeName = officeName;
        this.candidates = candidates;
        this.numVotes = numVotes;

    } // construstor

    /**
     * This method will validate a user's choice to see if it is a valid option.
     * @param candidatesPicked the candidates a user has chosed to vote for
     * @param writeIn any write ins that the user has inputed
     * @return Boolean Wether the vote is valid.
     */
    public Boolean validateVote(ArrayList<Candidate> candidatesPicked, ArrayList<String> writeIn) {
        return false;
    }

} // OfficerQuestion
