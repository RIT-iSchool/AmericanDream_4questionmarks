package BuisnessLayer.BallotObjects;

import java.util.ArrayList;

/**
 * Represents a ballot question for an officer position
 * 
 * @author Maija Philip
 * @version 1.0
 * @since 2023-10-04
 */
public class Officer {
 
    private String officeName;
    private ArrayList<Candidate> candidates;
    private Integer numVotes;

    /**
     * Create an OfficerQuestion with all of this information, leave empty if it is not provided.
     * @param officeName name of the position being voted upon
     * @param candidates list of the candidates in the running for this position
     * @param numVotes amount of candidates a user can vote for
     */
    public Officer(
        String officeName,
        ArrayList<Candidate> candidates,
        Integer numVotes
    ) {

        this.officeName = officeName;
        this.candidates = candidates;
        this.numVotes = numVotes;

    } // construstor

    /**
     * Get the office name
     * @return String office name
     */
    public String getOfficeName() { return officeName; }
    /**
     * Get the candidates in the election
     * @return ArrayList of candidates
     */
    public ArrayList<Candidate> getCandidates() { return candidates; }
    /**
     * Get the number of votes allowed
     * @return Integer num votes allowed
     */
    public Integer getNumVotes() { return numVotes; }
    /**
     * Set the office name
     * @param officName office name
     */
    public void setOfficeName( String officeName) { }
    /**
     * Set the candidates in the election
     * @param candidates of candidates
     */
    public void setCandidates( ArrayList<Candidate> candidates) { }
    /**
     * Set the number of votes allowed
     * @param numVotes num votes allowed
     */
    public void setNumVotes( Integer numVotes ) { }

    /**
     * This method will validate a user's choice to see if it is a valid option and store the vote if successfull
     * @param candidatesPicked the candidates a user has chosed to vote for
     * @param writeIn any write ins that the user has inputed
     * @return Boolean Wether the vote is valid.
     */
    public Boolean vote(ArrayList<Candidate> candidatesPicked, ArrayList<String> writeIn) {
        return false;
    }

} // OfficerQuestion
