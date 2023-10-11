package BuisnessLayer.BallotObjects;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.HashMap;

import BuisnessLayer.User.User;

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
    private ArrayList<Officer> officerQuestions;
    private ArrayList<Initiative> ballotInitiatives;
    private Integer voteCount;

    private ArrayList<User> users;
    private ArrayList<User> usersWhoVoted;
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
        ArrayList<Officer> officerQuestions, 
        ArrayList<Initiative> balloInitiatives,
        ArrayList<User> users) {

            this.name = name;
            this.electionStart = electionStart;
            this.electionEnd = electionEnd;
            this.officerQuestions = officerQuestions;
            this.ballotInitiatives = balloInitiatives;
            this.voteCount = 0;
            this.users = users;
    }


    // Getters and Setters
    /**
     * Get election name
     * @return String name of election
     */
    public String getElectionName() { return name; }
    /**
     * get the start of the election
     * @return String election start
     */
    public String getElectionStart() { return electionStart; }
    /**
     * get the end date of the election
     * @return String end date
     */
    public String getElectionEnd() { return electionEnd; }
    /**
     * Get the officer position questions on the ballot
     * @return ArrayList of the officer questions
     */
    public ArrayList<Officer> getOfficerQuestions() { 
        return officerQuestions; 
    }
    /**
     * get the initive questions on the ballot
     * @return ArrayList of inititve questions
     */
    public ArrayList<Initiative> getBallotInitiatives() { 
        return ballotInitiatives; 
    }
    /**
     * get the users who are able to vote in the election
     * @return ArrayList of users who can vote in this election
     */
    public ArrayList<User> getUsers() { return users; }
    /**
     * get the users who have already voted
     * @return ArrayList of users who have already voted
     */
    public ArrayList<User> getUsersWhoVoted() { return usersWhoVoted; }
    /**
     * Set election name
     * @param name name of election
     */
    public void setElectionName(String name) { }
    /**
     * Set the start of the election
     * @param startDate election start
     */
    public void setElectionStart(String startDate) { }
    /**
     * Set the end date of the election
     * @param endDate end date
     */
    public void setElectionEnd(String endDate) { }
    /**
     * Set the officer position questions on the ballot
     * @param officerQuestions of the officer questions
     */
    public void setOfficerQuestions(ArrayList<Officer> officerQuestions){ }
    /**
     * Set the initive questions on the ballot
     * @param ballotInitiatives of inititve questions
     */
    public void setBallotInitiatives(ArrayList<Initiative> ballotInitiatives) { }

    



    /**
     * Return a nested arraylist of the results of the election
     * example results
     * [
     *      // Officer Questions
     *      [
     *           // Question 1
     *          [
     *              // Candidate 1
     *              54.3,
     *             // Candidate 2
     *              12.4,
     *          ],
     *      ],
     * 
     *      // Initiatives
     *      [
     *           // Question 1
     *           [
     *              // response 1
     *              96.3,
     *              // response 2
     *              4.7
     *           ],
     *      ],
     * ]
     * @return 3x Nested ArrayList of the results 
     */
    public ArrayList<ArrayList<ArrayList<Double>>> calculateResults() {
        return new ArrayList<>();
    }

    /**
     * Marks the user as done with the ballot
     */
    public void finishVoting() {}

    /**
     * Returns the percent of people that have voted in the election so far
     * @return Double percent people voted
     */
    public Double getProgress() {
        return 0.0;
    }



}

