import { createContext } from "react";
import * as React from "react";
import { useState } from "react";

const BallotResponsesContext = createContext({
    offices: [],
    initiatives: [],
});

/*
    Example Data

    {
        offices: [
            {votes: [1, 3], writeIn: ""},
            {votes: [-2, 2], writeIn: "Kitty O'Neil"}
        ],
        initiatives: [1, 3]
    }
*/

export const BallotResponsesProvider = ({ children }) => {
    const [offices, setOffices] = useState([]);
    const [initiatives, setInitiatives] = useState([]);

    const voteOffice = (officeId, votes, writeIn) => {
        var temp = JSON.parse(JSON.stringify(offices));

        if (!temp[officeId]) {
            temp[officeId] = {
                votes: votes,
                writeIn: writeIn
            }
        } else {
            temp[officeId].votes = votes;
            temp[officeId].writeIn = writeIn;
        }
        

        setOffices(temp);
        
    }

    const voteInitiative = (initiativeId, responseId) => {
        let temp = initiatives.slice();
        temp[initiativeId] = responseId;
        setInitiatives(temp);
    }

    const clearAll = () => {
        setOffices([]);
        setInitiatives([]);
    }

    return (
        <BallotResponsesContext.Provider
            value={{ offices, initiatives, voteOffice, voteInitiative, clearAll }}
        >
            {children}
        </BallotResponsesContext.Provider>
    );
};

export default BallotResponsesContext;
