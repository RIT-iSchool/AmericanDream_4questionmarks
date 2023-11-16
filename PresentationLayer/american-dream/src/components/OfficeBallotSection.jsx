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
import CandidateBox from "./CandidateBox.js";
import WriteIn from "./WriteIn.js";
import CustomTabPanel from "./CustomTabPanel.jsx";
import BallotResponsesContext from "../utils/BallotResponsesContext.jsx";

export default function OfficeBallotSection({ value, index, office }) {
    
    const { voteOffice } = React.useContext(BallotResponsesContext);
    const [selected, setSelected] = useState([]);
    const [writeIn, setWriteIn] = useState(""); // "" unless voting for write in

    // returns a boolean if vote is valid
    const voteForCandidate = (candidateId) => {
        console.log("vote");
        if (selected.length === office.maxVotes) {
            return false;
        }
        let temp = selected.slice();
        temp.push(candidateId);
        setSelected(temp);

        voteOffice(office.id, selected, "");
        return true;
    }

    // writeIn id is -2
    const voteForWriteIn = (writeInValue) => {
        let isValid = voteForCandidate(-2);
        if (isValid) {
            setWriteIn(writeInValue);
            voteOffice(office.id, selected, writeIn);
            return true;
        }
        return false;
    }

    // returns false if the vote doesn't exist in the first place, true for successful retract
    const retractVoteCandidate = (candidateId) => {
        console.log("retract vote");
        let position = selected.indexOf(candidateId);
        if (position === -1) {
            return false;
        }
        let temp = selected.splice(0, position).concat(selected.splice(position + 1));
        setSelected(temp);
        voteOffice(office.id, selected, "");

        return true;
    }

    const retractVoteForWriteIn = () => {
        let attempt = retractVoteCandidate(-2);
        if (attempt) {
            setWriteIn("");
            // don't need to put voteOffice() here bc we aren't setting a writeIn
            return true;
        }
        return false;
    }

    return (
        <CustomTabPanel value={value} index={index}>
            <div className="candidate-box-wrapper">
                {
                    /* Candidate Positions */
                    office.candidates.map((candidate, index) => (
                        <CandidateBox
                            key={index}
                            candidate={candidate}
                            vote={voteForCandidate}
                            retractVote={retractVoteCandidate}
                        />
                    ))
                }
                <WriteIn
                    vote={voteForWriteIn}
                    retractVote={retractVoteForWriteIn}
                />
            </div>
        </CustomTabPanel>
    );
}
