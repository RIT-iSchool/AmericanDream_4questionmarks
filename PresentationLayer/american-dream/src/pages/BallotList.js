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
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";

function BallotList() {

    const [ballots, setBallots] = useState([]);
    var role = ROLE.administrator;

    useEffect(() => {
        axios.get('http://localhost:8080/ballots')
            .then(response => {
                const fetchedBallots = response.data.map(ballot => {
                    return {
                        title: ballot.ballotName,
                        date: `${ballot.electionStart} - ${ballot.electionEnd}`,
                        isFinished: false, // Placeholder
                        hasStarted: true, // Placeholder
                    };
                });
                setBallots(fetchedBallots);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <Page title="Ballot List">
            <div className="ballot-box-wrapper">
            {
                /* Ballot Boxes */
                ballots.map(
                    ( ballot, index ) => ( 
                        <BallotBox key={index} role={role} ballot={ballot} />
                 ) )
            }
            </div>
        </Page>
    );
}

export default BallotList;
