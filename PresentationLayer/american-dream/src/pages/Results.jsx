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
import * as React from "react";
import { ballotResults } from "../utils/sampleBallotResults.js";
import ResultCandidateBox from "../components/ResultCandidateBox.jsx";
import ResultInitiativeBox from "../components/ResultInitiativeBox.jsx";

export default function Results() {
    let ballot = ballotResults;

    return (
        <div>
            <CustomAppBar pageName={ballot.title} />
            <section>
                <Typography variant="h3" color={colors["on-surface"]}>
                    {ballot.title}
                </Typography>
                <Typography variant="body" color={colors["on-surface"]}>
                    {ballot.startdate} - {ballot.enddate}
                </Typography>
                <br />
                <br />
                <br />
                {/* Run through the offices */}
                {ballot.offices.map((office, index) => {
                    return (
                        <>
                            <Typography
                                variant="h6"
                                color={colors["on-surface"]}
                            >
                                {office.title}
                            </Typography>
                            <div className="candidate-results-wrapper">
                                {/* Map the candidates */}
                                {office.candidates
                                    .sort((a, b) => {
                                        return a.percent > b.percent;
                                    })
                                    .map((candidate, index) => {
                                        return (
                                            <ResultCandidateBox
                                                key={index}
                                                candidateResultObj={candidate}
                                                isBig={index < office.maxVotes}
                                            />
                                        );
                                    })}
                            </div>
                        </>
                    );
                })}

                {/* Run through the initiatives */}
                {ballot.initiatives.map((initiative, index) => {
                    return (
                        <div style={{ paddingBottom: "2em" }}>
                            <Typography
                                variant="body"
                                color={colors["on-surface"]}
                            >
                                {initiative.description}
                            </Typography>
                            <div style={{ paddingTop: "1em" }}>
                                {initiative.responses
                                    .sort((a, b) => {
                                        return a.percent > b.percent;
                                    })
                                    .map((response, index) => {
                                        return (
                                            <ResultInitiativeBox
                                                key={index}
                                                response={response}
                                                isBig={index < 1}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
