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

function InitiativeBox({ initiative, index, vote }) {
    const [selected, setSelected] = useState("");

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
                                selected === response ? "contained" : "outlined"
                            }
                            onClick={() => {
                                setSelected(response);
                                vote(initiative.id, response.id)
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
