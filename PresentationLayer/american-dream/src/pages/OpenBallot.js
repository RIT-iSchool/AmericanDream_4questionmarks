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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CandidateBox from "../components/CandidateBox";
import WriteIn from "../components/WriteIn";
import InitiativeBox from "../components/InitiativeBox";

// TODO: will take in a ballot
function OpenBallot() {
    let ballot = sampleBallot;
    let selections = {
        candidatePositions: [],
        initiatives: [],
    };

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
                            ballot.candidatePositions.map((position, index) => (
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
                    ballot.candidatePositions.map((position, index) => (
                        <CustomTabPanel key={index} value={value} index={index}>
                            <div className="candidate-box-wrapper">
                                {
                                    /* Candidate Positions */
                                    ballot.candidatePositions[
                                        index
                                    ].candidates.map((candidate, index) => (
                                        <CandidateBox
                                            key={index}
                                            candidate={candidate}
                                            selected={index === 0}
                                        />
                                    ))
                                }
                                <WriteIn selected={false} />
                            </div>
                        </CustomTabPanel>
                    ))
                }
                {
                    /* Initiatives Tab Content */
                    ballot.initiatives.map((initiative, index) => (
                        <CustomTabPanel
                            key={index}
                            value={value}
                            index={index + ballot.candidatePositions.length}
                        >
                            <InitiativeBox initiative={initiative} index={index} />
                        </CustomTabPanel>
                    ))
                }
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

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default OpenBallot;
