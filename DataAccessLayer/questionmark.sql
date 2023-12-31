SET SESSION sql_mode = "REAL_AS_FLOAT,PIPES_AS_CONCAT,IGNORE_SPACE,ONLY_FULL_GROUP_BY,TRADITIONAL";

DROP DATABASE IF EXISTS electiondb;

CREATE DATABASE electiondb;
USE electiondb;

-- Society Table
CREATE TABLE Society (
    SocietyID INT AUTO_INCREMENT PRIMARY KEY,
    SocietyName VARCHAR(100) NOT NULL,
    SocietyDesc VARCHAR(150)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Ballot Table
CREATE TABLE Ballot (
    BallotID INT AUTO_INCREMENT PRIMARY KEY,
    BallotName VARCHAR(100) NOT NULL,
    ElectionStart DATETIME NOT NULL,
    ElectionEnd DATETIME NOT NULL,
    Offices JSON NOT NULL,
    SocietyID INT NOT NULL,
    FOREIGN KEY (SocietyID) REFERENCES Society(SocietyID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Ballot_Initiative Table
CREATE TABLE Ballot_Initiative (
    InitiativeID INT AUTO_INCREMENT PRIMARY KEY,
    Description VARCHAR(150),
    Abstain BOOLEAN NOT NULL,
    BallotID INT NOT NULL,
    FOREIGN KEY (BallotID) REFERENCES Ballot(BallotID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Ballot_Option Table
CREATE TABLE Ballot_Option (
    OptionID INT AUTO_INCREMENT PRIMARY KEY,
    Description VARCHAR(150),
    InitiativeID INT NOT NULL,
    FOREIGN KEY (InitiativeID) REFERENCES Ballot_Initiative(InitiativeID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Roles Table
CREATE TABLE Roles (
    RoleID INT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- User Table
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(60) NOT NULL,
    SocietyID INT NOT NULL,
    RoleID INT NOT NULL,
    FOREIGN KEY (SocietyID) REFERENCES Society(SocietyID),
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Response Table
CREATE TABLE Response (
    ResponseID INT AUTO_INCREMENT PRIMARY KEY,
    OptionID INT NOT NULL,
    UserID INT NOT NULL,
    FOREIGN KEY (OptionID) REFERENCES Ballot_Option(OptionID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Vote Table
CREATE TABLE Vote (
    VoteID INT AUTO_INCREMENT PRIMARY KEY,
    CandidateID INT NOT NULL,
    CandidateName VARCHAR(100) NOT NULL,
    Abstain BOOLEAN NOT NULL,
    VoteType ENUM('WriteIn', 'NotWriteIn') NOT NULL,
    OfficeJSONID INT NOT NULL,
    BallotID INT NOT NULL,
    UserID INT NOT NULL,
    FOREIGN KEY (BallotID) REFERENCES Ballot(BallotID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- User Table
CREATE INDEX idx_user_email ON User (Email);
CREATE INDEX idx_user_fname ON User (fName);
CREATE INDEX idx_user_lname ON User (lName);

-- Role Table
CREATE INDEX idx_roles_rolename ON Roles (RoleName);

-- Society Table
CREATE INDEX idx_society_name ON Society (SocietyName);

-- Ballot Table
CREATE INDEX idx_ballot_electionstart ON Ballot (ElectionStart);
CREATE INDEX idx_ballot_electionend ON Ballot (ElectionEnd);
CREATE INDEX idx_ballot_election_dates ON Ballot (ElectionStart, ElectionEnd);

-- Ballot_Initiative Table
CREATE INDEX idx_ballot_initiative_description ON Ballot_Initiative (Description);

-- Ballot_Option Table
CREATE INDEX idx_ballot_option_description ON Ballot_Option (Description);

-- Add Society
DELIMITER //

CREATE PROCEDURE AddSociety(IN societyName VARCHAR(100), IN societyDesc VARCHAR(150))
BEGIN
    INSERT INTO Society (SocietyName, SocietyDesc) VALUES (societyName, societyDesc);
END //

-- Add Ballot
CREATE PROCEDURE AddBallot(IN ballotName VARCHAR(100), IN electionStart DATETIME, IN electionEnd DATETIME, IN offices JSON, IN societyID INT)
BEGIN
    INSERT INTO Ballot (BallotName, ElectionStart, ElectionEnd, Offices, SocietyID) VALUES (ballotName, electionStart, electionEnd, offices, societyID);
END //


-- Add BallotInitiative
CREATE PROCEDURE AddBallotInitiative(IN description VARCHAR(150), IN abstain BOOLEAN, IN ballotID INT)
BEGIN
    INSERT INTO Ballot_Initiative (Description, Abstain, BallotID) VALUES (description, abstain, ballotID);
END //

-- Add BallotOption
CREATE PROCEDURE AddNewBallotOption(IN description VARCHAR(150), IN initiativeID INT)
BEGIN
    INSERT INTO Ballot_Option (Description, InitiativeID) VALUES (description, initiativeID);
END //

-- Add User
CREATE PROCEDURE AddUser(IN fName VARCHAR(50), IN lName VARCHAR(50), IN email VARCHAR(100), IN password VARCHAR(50), IN societyID INT)
BEGIN
    INSERT INTO User (fName, lName, Email, Password, RoleID, SocietyID) VALUES (fName, lName, email, password, roleID, societyID);
END //

-- Submit Ballot Response
CREATE PROCEDURE SubmitBallotResponse(IN optionID INT, IN userID INT)
BEGIN
    INSERT INTO Response (OptionID, UserID) VALUES (optionID, userID);
END //

-- Submit Vote
CREATE PROCEDURE SubmitVote(IN candidateID INT, IN candidateName VARCHAR(100), IN abstain BOOLEAN, IN voteType ENUM('WriteIn', 'NotWriteIn'), IN officeJSONID INT, IN ballotID INT, IN userID INT)
BEGIN
    INSERT INTO Vote (CandidateID, CandidateName, Abstain, VoteType, OfficeJSONID, BallotID, UserID) VALUES (candidateID, candidateName, abstain, voteType, officeJSONID, ballotID, userID);
END //

-- Update User
CREATE PROCEDURE UpdateUserInfo(IN userID INT, IN fName VARCHAR(50), IN lName VARCHAR(50), IN email VARCHAR(100), IN password VARCHAR(50))
BEGIN
    UPDATE User SET fName = fName, lName = lName, Email = email, Password = password WHERE UserID = userID;
END //

-- Delete Ballot
CREATE PROCEDURE DeleteBallot(IN ballotID INT)
BEGIN
    DELETE FROM Ballot WHERE BallotID = ballotID;
END //

-- List All Societies
CREATE PROCEDURE ListSocieties()
BEGIN
    SELECT * FROM Society;
END //

-- List All Users
CREATE PROCEDURE ListAllUsers()
BEGIN
    SELECT * FROM User;
END //

-- List All Ballots
CREATE PROCEDURE ListAllBallots()
BEGIN
    SELECT * FROM Ballot;
END //

DELIMITER ;

-- Insert into Society Table
INSERT INTO Society (SocietyName, SocietyDesc)
VALUES ('American Society', 'A society for hamburger people');

INSERT INTO Society (SocietyName, SocietyDesc)
VALUES ('Clown Society', 'A second joke');

-- Insert into Ballot Table with JSON data
INSERT INTO Ballot (BallotName, ElectionStart, ElectionEnd, Offices, SocietyID)
VALUES (
    'BallotNamed',
    '2023-11-01',
    '2023-12-01',
    '{
        "offices": [
            {
                "id": "o1",
                "name": "President",
                "candidates": [
                    {
                        "id": "c1",
                        "name": "Yannis Ioannidis",
                        "position": "future president",
                        "bio": "Very important person",
                        "image": "https://example.com/images/yannis_ioannidis.jpg"
                    },
                    {
                        "id": "c2",
                        "name": "Jens Palsberg",
                        "position": "future president 2",
                        "bio": "Very important person 2",
                        "image": "https://example.com/images/jens_palsberg.jpg"
                    }
                ],
                "choices": 1
            }
        ]
    }',
    1
);

-- Insert into Ballot_Initiative Table
INSERT INTO Ballot_Initiative (Description, Abstain, BallotID)
VALUES ('Initiative for Net Neutrality', FALSE, 1);

INSERT INTO Ballot_Initiative (Description, Abstain, BallotID)
VALUES ('Initiative for Test', FALSE, 1);

-- Insert into Ballot_Option Table
INSERT INTO Ballot_Option (Description, InitiativeID)
VALUES ('Option 1 for Initiative', 1);

INSERT INTO Ballot_Option (Description, InitiativeID)
VALUES ('Option 2 for Initiative 2', 2);

-- Insert into Roles Table
INSERT INTO Roles (RoleName) VALUES ('MEMBER');
INSERT INTO Roles (RoleName) VALUES ('OFFICER');
INSERT INTO Roles (RoleName) VALUES ('EMPLOYEE');
INSERT INTO Roles (RoleName) VALUES ('ADMIN');

-- Insert into User Table, TIP: John's password is not encoded and fails
INSERT INTO User (fName, lName, Email, Password, SocietyID, RoleID)
VALUES ('John', 'Smith', 'johnsmith@example.com', 'password123', 1, 1);

INSERT INTO User (fName, lName, Email, Password, SocietyID, RoleID)
VALUES ('Mary', 'Smith', 'marysmith@example.com', '$2a$10$tY0cgcloufJdzz0ZYlcdpeLD.OFstEBSlC69RcTwLz2ILsv.wke7G', 1, 1);

INSERT INTO User (fName, lName, Email, Password, SocietyID, RoleID)
VALUES ('J', 'Smith', 'jsmith@example.com', '$2a$10$tY0cgcloufJdzz0ZYlcdpeLD.OFstEBSlC69RcTwLz2ILsv.wke7G', 1, 2);

INSERT INTO User (fName, lName, Email, Password, SocietyID, RoleID)
VALUES ('M', 'Smith', 'msmith@example.com', '$2a$10$tY0cgcloufJdzz0ZYlcdpeLD.OFstEBSlC69RcTwLz2ILsv.wke7G', 1, 3);

INSERT INTO User (fName, lName, Email, Password, SocietyID, RoleID)
VALUES ('M', 'Smith', 'smith@example.com', '$2a$10$tY0cgcloufJdzz0ZYlcdpeLD.OFstEBSlC69RcTwLz2ILsv.wke7G', 1, 4);


-- Insert into Response Table
INSERT INTO Response (OptionID, UserID)
VALUES (1, 1);

INSERT INTO Response (OptionID, UserID) 
VALUES (2, 2);



-- Insert into Vote Table
INSERT INTO Vote (CandidateID, CandidateName, Abstain, VoteType, OfficeJSONID, BallotID, UserID)
VALUES (1, 'John Smith', FALSE, 'NotWriteIn', 2, 1, 1);
INSERT INTO Vote (CandidateID, CandidateName, Abstain, VoteType, OfficeJSONID, BallotID, UserID)
VALUES (2, 'Mary Smith', FALSE, 'NotWriteIn', 2, 1, 2);
