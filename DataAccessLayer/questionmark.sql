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

-- User Table
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(50) NOT NULL,
    SocietyID INT NOT NULL,
    FOREIGN KEY (SocietyID) REFERENCES Society(SocietyID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Response Table
CREATE TABLE Response (
    ResponseID INT AUTO_INCREMENT PRIMARY KEY,
    OptionID INT NOT NULL,
    UserID INT NOT NULL,
    FOREIGN KEY (OptionID) REFERENCES Ballot_Option(OptionID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Roles Table
CREATE TABLE Roles (
    RoleID INT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(100) NOT NULL,
    UserID INT NOT NULL,
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

DELIMITER //
CREATE PROCEDURE AddNewSociety(IN societyName VARCHAR(100), IN societyDesc VARCHAR(150))
BEGIN
    INSERT INTO Society (SocietyName, SocietyDesc) VALUES (societyName, societyDesc);
END //
DELIMITER ;


-- Insert into Society Table
INSERT INTO Society (SocietyName, SocietyDesc)
VALUES ('American Society', 'A society for hamburger people');

-- Insert into Ballot Table with JSON data
INSERT INTO Ballot (ElectionStart, ElectionEnd, Offices, SocietyID)
VALUES (
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

-- Insert into Ballot_Option Table
INSERT INTO Ballot_Option (Description, InitiativeID)
VALUES ('Option 1 for Initiative', 1);

-- Insert into User Table
INSERT INTO User (fName, lName, Email, Password, SocietyID)
VALUES ('John', 'Smith', 'johnsmith@example.com', 'password123', 1);

-- Insert into Response Table
INSERT INTO Response (OptionID, UserID)
VALUES (1, 1);

-- Insert into Roles Table
INSERT INTO Roles (RoleName, UserID)
VALUES ('Admin', 1);

-- Insert into Vote Table
INSERT INTO Vote (CandidateID, CandidateName, Abstain, VoteType, OfficeJSONID, BallotID, UserID)
VALUES (1, 'John Smith', FALSE, 'NotWriteIn', 1, 1, 1);

