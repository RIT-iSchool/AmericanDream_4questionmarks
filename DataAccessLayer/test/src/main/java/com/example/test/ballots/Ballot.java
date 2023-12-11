package com.example.test.ballots;

import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.relational.core.mapping.Column;

import java.time.LocalDateTime;

@Table("Ballot") // Maps this class to the Ballot table in the database
public class Ballot {

    @Id
    @Column("BallotID")
    private Integer ballotId;

    @Column("BallotName")
    private String ballotName;

    @Column("ElectionStart")
    private LocalDateTime electionStart;

    @Column("ElectionEnd")
    private LocalDateTime electionEnd;

    @Column("Offices")
    private String offices; // JSON stored as String

    @Column("SocietyID")
    private Integer societyId;

    // Constructors, getters, setters...

    public Ballot() {
        // Default constructor
    }

    // Getters and Setters

    public Integer getBallotId() {
        return ballotId;
    }

    public void setBallotId(Integer ballotId) {
        this.ballotId = ballotId;
    }

    public String getBallotName() {
        return ballotName;
    }

    public void setBallotName(String ballotName) {
        this.ballotName = ballotName;
    }

    public LocalDateTime getElectionStart() {
        return electionStart;
    }

    public void setElectionStart(LocalDateTime electionStart) {
        this.electionStart = electionStart;
    }

    public LocalDateTime getElectionEnd() {
        return electionEnd;
    }

    public void setElectionEnd(LocalDateTime electionEnd) {
        this.electionEnd = electionEnd;
    }

    public String getOffices() {
        return offices;
    }

    public void setOffices(String offices) {
        this.offices = offices;
    }

    public Integer getSocietyId() {
        return societyId;
    }

    public void setSocietyId(Integer societyId) {
        this.societyId = societyId;
    }
}
