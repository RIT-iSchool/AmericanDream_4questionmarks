package com.example.test.ballots;

import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.relational.core.mapping.Column;

@Table("Ballot_Initiative") // Maps this class to the Ballot_Initiative table in the database
public class BallotInitiative {

    @Id
    @Column("InitiativeID")
    private Integer initiativeId;

    @Column("Description")
    private String description;

    @Column("Abstain")
    private Boolean abstain;

    @Column("BallotID")
    private Integer ballotId;

    // Constructors, getters, and setters

    public BallotInitiative() {
        // Default constructor
    }

    // Getters and setters for each field
    public void setInitiativeId(Integer initiativeId) {
        this.initiativeId = initiativeId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getAbstain() {
        return abstain;
    }

    public void setAbstain(Boolean abstain) {
        this.abstain = abstain;
    }

    public Integer getBallotId() {
        return ballotId;
    }

    public void setBallotId(Integer ballotId) {
        this.ballotId = ballotId;
    }
}