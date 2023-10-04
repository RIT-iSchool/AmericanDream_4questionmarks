package BuisnessLayer.BallotObjects;

/**
 * Represents a candidate for an officer position
 * 
 * @author Maija Philip
 * @version 1.0
 * @since 2023-10-04
 */
public class Candidate {
    
    private String name;
    private String titles;
    private String description;
    private String pathToPortait;

    /**
     * Instantiates a new Candidate
     * @param name full name of the candidate as it should appear to the user
     * @param titles any titles that the candidate would like to show off
     * @param description a biography about the candidate
     * @param pathToPortait path to the portrait of the candidate
     */
    public Candidate(
        String name,
        String titles,
        String description,
        String pathToPortait
    ) {
        
        this.name = name;
        this.titles = titles;
        this.description = description;
        this.pathToPortait = pathToPortait;

    }
}
