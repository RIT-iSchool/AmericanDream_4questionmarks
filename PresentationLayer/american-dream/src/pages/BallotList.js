import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ROLE } from "../utils/role.js";
import BallotBox from "../components/BallotBox";
import Page from "../components/Page.js";
import { Link } from "react-router-dom";

function BallotList() {

    const [ballots, setBallots] = useState([]);
    var role = ROLE.administrator;

    useEffect(() => {
        axios.get('http://localhost:8080/ballots')
            .then(response => {
                console.log("Response data:", response.data);
                const fetchedBallots = response.data.map(ballot => {
                    console.log("Ballots:", ballot.ballotId);
                    return {
                        ...ballot,
                        title: ballot.ballotName,
                        date: `${ballot.electionStart} - ${ballot.electionEnd}`,
                        isFinished: false, // Placeholder
                        hasStarted: true, // Placeholder
                    };
                });
                setBallots(fetchedBallots);
                console.log("Fetched ballots:", fetchedBallots);
                
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);
    

    return (
        <Page title="Ballot List">
            <div className="ballot-box-wrapper">
            {ballots.map((ballot, index) => {
            return (
                <Link key={index} to={`/ballots/${ballot.ballotId}`}>
                    <BallotBox ballot={ballot} />
                </Link>
            );
            })}
            </div>
        </Page>
    );   
}

export default BallotList;