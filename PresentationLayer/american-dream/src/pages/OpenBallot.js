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

// TODO: will take in a ballot in JSON
// for voting, write in needs to be id -2
function OpenBallot() {
    let ballot = sampleBallot;
    
    const {offices, initiatives, clearAll } = React.useContext(BallotResponsesContext);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
