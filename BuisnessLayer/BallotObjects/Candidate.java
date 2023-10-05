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

    } // constructor

    // getters and setters
    /**
     * Get candidate name
     * @return String candidate name
     */
    public String getName() { return name; }
    /**
     * Get candidate titles
     * @return String candidate titles
     */
    public String getTitles() { return titles; }
    /**
     * Get candidate Description
     * @return String description
     */
    public String getDescription() { return description; }
    /**
     * get the path to the candidates portrait
     * @return String path to portrait
     */
    public String getPathToPortrait() { return pathToPortait; }    

    /**
     * set candidate name
     * @param String candidate name
     */
    public void setName(String name) { }
    /**
     * Set candidate titles
     * @param titles candidate titles
     */
    public void setTitles(String titles) { }
    /**
     * Set candidate Description
     * @param description description
     */
    public void setDescription(String description) {}
    /**
     * Set the path to the candidates portrait
     * @param pathToPortrait path to portrait
     */
    public void setPathToPortriat(String pathtoPortrait) {} 

} // Candidate
