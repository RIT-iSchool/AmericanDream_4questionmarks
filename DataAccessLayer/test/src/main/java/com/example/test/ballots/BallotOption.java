package com.example.test.ballots;

import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.relational.core.mapping.Column;

@Table("Ballot_Option")
public class BallotOption {

    @Id
    @Column("OptionID")
    private Integer optionId;

    @Column("Description")
    private String description;

    @Column("InitiativeID")
    private Integer initiativeId;

    // Default constructor
    public BallotOption() {}

    // Getters and setters
    public Integer getOptionId() {
        return optionId;
    }

    public void setOptionId(Integer optionId) {
        this.optionId = optionId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getInitiativeId() {
        return initiativeId;
    }

    public void setInitiativeId(Integer initiativeId) {
        this.initiativeId = initiativeId;
    }
}