import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import * as React from "react";

export default function ResultInitiativeBox({ response, isBig }) {
    const percent = String.fromCharCode(37);

    return (
        <Typography
            variant={isBig ? "h4" : "h6"}
            color={colors["primary"]}
            sx={{ fontWeight: "bold" }}
        >
            {response.percent}
            {percent} {response.title}
        </Typography>
    );
}
