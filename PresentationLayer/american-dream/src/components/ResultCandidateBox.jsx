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
import test from "../assets/test.jpeg";

export default function ResultCandidateBox({ candidateResultObj, isBig }) {
    const percent = String.fromCharCode(37);
    let candidate = candidateResultObj.candidate;
    let writeIn = candidateResultObj.writeIn;

    return (
        <div className="result-candidate-box">
            {candidate ? (
                <div
                    className={
                        isBig ? "img-wrapper-result" : "img-wrapper-result smol"
                    }
                >
                    <img
                        src={test}
                        alt={`${candidate.name} dressed professionaly`}
                    />{" "}
                    {/*  */}
                </div>
            ) : (
                <Typography variant="h6" color={colors["on-surface"]}>
                    Write In
                </Typography>
            )}
            <Typography variant="body" color={colors["on-surface"]}>
                {candidate ? candidate.name : writeIn.name}
            </Typography>
            <Typography
                variant={isBig ? "h3" : "h5"}
                color={colors["primary"]}
                sx={{ fontWeight: "bold" }}
            >
                {candidateResultObj.percent}
                {percent}
            </Typography>
        </div>
    );
}
