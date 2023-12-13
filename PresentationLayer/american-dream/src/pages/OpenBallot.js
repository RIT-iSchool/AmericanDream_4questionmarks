import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CustomAppBar from "../components/CustomAppBar.js";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";

import { sampleBallot } from "../utils/sampleBallot.js";
import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InitiativeBox from "../components/InitiativeBox";
import Button from "@mui/material/Button";
import CustomTabPanel from "../components/CustomTabPanel.jsx";
import OfficeBallotSection from "../components/OfficeBallotSection.jsx";
import BallotResponsesContext from "../utils/BallotResponsesContext.jsx";

function OpenBallot() {
    const { ballotId } = useParams();
    console.log("ballotId:", ballotId);
    const [ballot, setBallot] = useState(null);
    const { offices, initiatives, clearAll } = React.useContext(BallotResponsesContext);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);

    useEffect(() => {
        const id = parseInt(ballotId, 10);
        if (!isNaN(id)) {
            axios.get(`http://localhost:8080/ballots/${id}`)
            
            .then(response => {
                const fetchedBallot = response.data;

                // Check and parse offices and initiatives if they are strings
                if (typeof fetchedBallot.offices === 'string') {
                    fetchedBallot.offices = JSON.parse(fetchedBallot.offices).offices || [];
                }
                if (typeof fetchedBallot.initiatives === 'string') {
                    fetchedBallot.initiatives = JSON.parse(fetchedBallot.initiatives) || [];
                }

                // Initialize offices and initiatives as empty arrays if undefined
                fetchedBallot.offices = fetchedBallot.offices || [];
                fetchedBallot.initiatives = fetchedBallot.initiatives || [];

                setBallot(fetchedBallot);
            })
            .catch(error => {
                console.error(`Error fetching ballot with id ${ballotId}:`, error);
            });
        } else {
            console.error("Invalid ballotId:", ballotId);
        }
    }, [ballotId]);

    if (!ballot) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <CustomAppBar pageName={ballot.title} />
            <section>
                <Typography variant="body" color={colors["on-surface"]}>
                    {ballot.startdate} - {ballot.enddate}
                </Typography>
                <br />
                <br />

                {/* Ballot Content */}
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="ballot sections"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {
                            /* Candidate Positions */
                            ballot.offices.map((position, index) => (
                                <Tab
                                    key={index}
                                    label={position.title}
                                    {...a11yProps(index)}
                                />
                            ))
                        }
                        {
                            /* Initiatives */
                            ballot.initiatives.map((initiative, index) => (
                                <Tab
                                    key={index}
                                    label={`Initiative ${index + 1}`}
                                    {...a11yProps(index)}
                                />
                            ))
                        }
                    </Tabs>
                </Box>

                {
                    /* Candidate Positions Tab Content */
                    ballot.offices.map((office, index) => (
                        <OfficeBallotSection 
                            key={index}
                            index={index}
                            value={value}
                            office={office}
                        />
                    ))
                }
                {
                    /* Initiatives Tab Content */
                    ballot.initiatives.map((initiative, index) => (
                        <CustomTabPanel
                            key={index}
                            value={value}
                            index={index + ballot.offices.length}
                        >
                            <InitiativeBox
                                initiative={initiative}
                                index={index}
                            />
                        </CustomTabPanel>
                    ))
                }

                <br />
                <br />
                <Button
                    variant={"contained"}
                    onClick={() => {
                        // send vote off
                        console.log("offices: ", offices);
                        console.log("initiatives: ", initiatives);
                        // clearAll();
                    }}
                >
                    Finish Voting
                </Button>
            </section>
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}



export default OpenBallot;