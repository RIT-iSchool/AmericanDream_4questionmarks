package com.example.demo;

import javax.persistence.*;
import java.util.List;

@Entity
public class Society {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long societyID;

    @Column(nullable = false, length = 100)
    private String societyName;

    @Column(length = 150)
    private String societyDesc;

    @OneToMany(mappedBy = "society")
    private List<User> users;

    // JPA empty constructors

    public Society() {}

    public Society(String societyName, String societyDesc) {
        this.societyName = societyName;
        this.societyDesc = societyDesc;
    }

    // Getters and Setters

    public Long getSocietyID() {
        return societyID;
    }

    public void setSocietyID(Long societyID) {
        this.societyID = societyID;
    }

    public String getSocietyName() {
        return societyName;
    }

    public void setSocietyName(String societyName) {
        this.societyName = societyName;
    }

    public String getSocietyDesc() {
        return societyDesc;
    }

    public void setSocietyDesc(String societyDesc) {
        this.societyDesc = societyDesc;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
