import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import test from "../assets/test.jpeg";

import { useState } from "react";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import * as React from "react";
import Stack from "@mui/material/Stack";
import ColoredAvatar from "./ColoredAvatar";
import Button from "@mui/material/Button";

function CandidateBox({ candidate, vote, retractVote }) {
    const [selected, setSelected] = useState(false);

    return (
        <div
            className={
                selected ? "candidate-box selected-box" : "candidate-box"
            }
        >
            <Stack direction="row" spacing={2} className="padding">
                <ColoredAvatar name={candidate.name} />
                <Stack direction="column" spacing={2}>
                    <Typography
                        variant="body"
                        color={colors["on-surface"]}
                        className="less-margin-bottom"
                    >
                        {candidate.name}
                    </Typography>
                    <Typography variant="caption" color={colors["on-surface"]}>
                        {candidate.titles}
                    </Typography>
                    {/* Image */}
                </Stack>
            </Stack>
            <img src={test} alt={`${candidate.name} dressed professionaly`} />

            <br />
            <div className="padding">
                <Typography variant="body" color={colors["on-surface"]}>
                    {candidate.description}
                </Typography>
            </div>
            <br />
            <br />
            <div className="button-box-candidate">
                <Button variant="outlined">Read more</Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (!selected) {
                            let attempt = vote(candidate.id);
                            if (attempt) {
                                setSelected(true);
                            }
                        } else {
                            let attempt = retractVote(candidate.id);
                            if (attempt) {
                                setSelected(false);
                            }
                        }
                    }}
                >
                    {selected ? "Voted!" : "Vote"}
                </Button>
            </div>
        </div>
    );
}

export default CandidateBox;
