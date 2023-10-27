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
CREATE INDEX idx_user_societyID ON User (SocietyID);

-- Ballot Table
CREATE INDEX idx_ballot_societyID ON Ballot (SocietyID);

-- Ballot_Initiative Table
CREATE INDEX idx_ballot_initiative_ballotID ON Ballot_Initiative (BallotID);

-- Ballot_Option Table
CREATE INDEX idx_ballot_option_initiativeID ON Ballot_Option (InitiativeID);

-- Response Table
CREATE INDEX idx_response_optionID ON Response (OptionID);
CREATE INDEX idx_response_userID ON Response (UserID);

-- Roles Table
CREATE INDEX idx_roles_userID ON Roles (UserID);

-- Vote Table
CREATE INDEX idx_vote_ballotID ON Vote (BallotID);
CREATE INDEX idx_vote_userID ON Vote (UserID);

-- Vote Table Composite Index 
CREATE INDEX idx_vote_ballot_user ON Vote (BallotID, UserID);

