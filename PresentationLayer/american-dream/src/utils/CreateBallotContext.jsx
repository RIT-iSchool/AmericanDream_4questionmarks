// TODO

import { createContext } from "react";
import * as React from "react";

/*
{
    offices: [
        {
            id :1,
            name: president,
            choices: 2,
            candidates: [
                id: c1,
                name: yannis,
                title: mvp,
                bio: im yanis,
            ]
        }
    ]
}
*/

const CreateBallotContext = createContext({
    description: {}, //society, ballotname, startdate, enddate
    offices: [], //{role, numvotes, writeIn}
    candidates: [], //{id, name, title, bio}
    initiatives: [], //{description, abstain, ballotId, options, response}
});

export const CreateBallotProvider = (({children}) => {
    const [description, setDescription] = React.useState({});
    const [offices, setOffices] = React.useState([]);
    const [candidates, setCandidates] = React.useState([]);
    const [initiatives, setInitiatives] = React.useState([]);

    //TODO: disable "future" tabs if current tab inputs arent filled out
    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const insertOffice = (role, numVotes, candidates) => {
        //create office obj
        var temp = {
            id: `o${offices.length+1}`,
            name: role,
            choices: numVotes,
            candidates: candidates
        }

        //push to offices array
        setOffices([
            ...offices,
            temp
        ]);
    }

    //abstain is a boolean
    const insertInitiative = (description, abstain, ballotId, options, response) => {
        //create initiative object
        var temp = {
            description: description,
            abstain: abstain,
            ballotId: ballotId,
            options: options,
            response: response,
        }

        //push to initiatives array
        setInitiatives([
            ...initiatives,
            temp
        ]);
    }

    return (
        <CreateBallotContext.Provider
            value={{ description, offices, candidates, initiatives, insertOffice, insertInitiative }}>
            {children}
        </CreateBallotContext.Provider>
    )
});