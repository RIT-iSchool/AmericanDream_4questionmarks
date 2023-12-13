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
import CustomTabPanel from "../components/CustomTabPanel.jsx";
import Societies from "./Societies.js";
import Statistics from "./Statistics.jsx";
import BallotBox from "../components/BallotBox";
import { ROLE } from "../utils/role.js";


function AdvancedBallotList({ role, ballots, ballotBoxes }) {
    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let editableBallots = ballots.filter((x) => !x.hasStarted);

    return (
        <div className="full-width">
            <section>
                {/* Ballot Content */}
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="homepage options"
                        variant="scrollable"
                        scrollButtons="auto"
                    >

                        { role === ROLE.administrator ? <Tab label={"Societies"} {...a11yProps("Societies")} /> : <></> }
                        <Tab label={"Ballots"} {...a11yProps("Ballots")} />
                        <Tab
                            label={"Create Ballot"}
                            {...a11yProps("Create Ballot")}
                        />
                        <Tab
                            label={"Edit Ballot"}
                            {...a11yProps("Edit Ballot")}
                        />
                        { role === ROLE.administrator ? <Tab
                            label={"Statistics"}
                            {...a11yProps("Statistics")}
                        /> : <></> }
                    </Tabs>
                </Box>

                { role === ROLE.administrator ? <CustomTabPanel value={value} index={0}>
                    <Societies />
                </CustomTabPanel> : <></> }
                <CustomTabPanel value={value} index={1}>
                    <div className="ballot-box-wrapper">{ballotBoxes}</div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {/* TODO: Replace this with create ballot page */}
                    <Typography variant="body" color={colors["on-surface"]}>
                        Create Ballot
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <div className="ballot-box-wrapper">
                        {editableBallots.length < 1 ? (
                            <Typography
                                variant="body"
                                color={colors["on-surface"]}
                            >
                                There are no editable ballots at the moment
                            </Typography>
                        ) : (
                            <></>
                        )}
                        {editableBallots.map((ballot, index) => (
                            <BallotBox
                                key={index}
                                role={role}
                                ballot={ballot}
                                editOnClick={true}
                            />
                        ))}
                    </div>
                </CustomTabPanel>
                { role === ROLE.administrator ? <CustomTabPanel value={value} index={4}>
                    <Statistics />
                </CustomTabPanel> : <></> }
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

export default AdvancedBallotList;
