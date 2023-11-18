import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import BallotResponsesContext from "../utils/BallotResponsesContext.jsx";

function InitiativeBox({ initiative, index }) {
    const { voteInitiative } = React.useContext(BallotResponsesContext);
    const [selected, setSelected] = useState(-1);

    const vote = (response) => {
        setSelected(response);
        voteInitiative(initiative.id, response);
    };

    return (
        <div className="initiative-box">
            <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: colors.primary }}>{index + 1}</Avatar>
                <Typography variant="h6" color={colors["on-surface"]}>
                    Initiative {index + 1}
                </Typography>
            </Stack>
            <br />
            <Typography variant="body" color={colors["on-surface"]}>
                {initiative.description}
            </Typography>
            <div className="button-box-candidate">
                {
                    /* Initiatives Options */
                    initiative.responses.map((response, index) => (
                        <Button
                            key={index}
                            variant={
                                selected === response.id ? "contained" : "outlined"
                            }
                            onClick={() => {
                                vote(response.id);
                            }}
                        >
                            {response.title}
                        </Button>
                    ))
                }
            </div>
        </div>
    );
}

export default InitiativeBox;
