import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CustomAppBar from "../components/CustomAppBar.js";
import { colors } from "../utils/colors.js";
import { sampleBallot } from "../utils/sampleBallot.js";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "../components/CustomTabPanel.jsx";
import UserRow from "./userRow.jsx";
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Page from "../components/Page.js";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function UserSearchForProgressBar({ voted, notVoted }) {

    // make voted and not voted states so we can change them with search
    const [searchText, setSearchText] = React.useState("");
    const [votedState, setVotedState] = React.useState(voted);
    const [notVotedState, setNotVotedState] = React.useState(notVoted);

    // tab stuff
    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const SearchTextField = styled(TextField)({
        "& .MuiFormLabel-root": {
            color: colors["on-primary-container"],
        },
        "& label.Mui-focused": {
            color: colors["on-primary-container"],
        },
        "& .MuiFilledInput-root": {
            borderRadius: '28px',
        },
        backgroundColor: '#302d38',
        borderRadius: '28px',
    });

    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
        let text = e.target.value
        console.log(text);

        // if its a space or empty show everthing
        if (text === "" || text === " ") {
            setNotVotedState(notVoted)
            setVotedState(voted)
            return;
        } 

        // otherwise search
        if (value === 0) {
            // looking in voted
            let temp = votedState.filter((n) => `${n.fname} ${n.lname}`.includes(text))
            setVotedState(temp);
        } else {
            // looking in not voted
            let temp = notVotedState.filter((n) => `${n.fname} ${n.lname}`.includes(text))
            setNotVotedState(temp);
        }

    };

    return (
        <div className="full-width">
            <section>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="homepage options"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label={"Voted"} {...a11yProps("Voted")} />
                        <Tab label={"Not Voted"} {...a11yProps("Not Voted")} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <SearchTextField
                        value={searchText}
                        variant="filled"
                        label="search"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    sx={{
                                        color: colors["on-primary-container"],
                                    }}
                                >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => handleSearchChange(e)}
                    />
                    {votedState.map((user, index) => {
                        return (
                            <UserRow
                                key={index}
                                user={user}
                                isOfficer={false}
                                showRight={false}
                            />
                        );
                    })}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <SearchTextField
                        value={searchText}
                        variant="filled"
                        label="search"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    sx={{
                                        color: colors["on-primary-container"],
                                    }}
                                >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => handleSearchChange(e)}
                    />
                    {notVotedState.map((user, index) => {
                        return (
                            <UserRow
                                key={index}
                                user={user}
                                isOfficer={false}
                                showRight={false}
                            />
                        );
                    })}
                </CustomTabPanel>
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
