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
import { ballotProgress } from "../utils/sampleBallotResults.js";
import LinearProgress from '@mui/material/LinearProgress';
import UserSearchForProgressBar from "../components/userSearchForProgress.jsx";

export default function Progress() {
    const percent = String.fromCharCode(37);
    let ballot = ballotProgress;  

    let progressCalc = ballot.voted.length / (ballot.notVoted.length + ballot.voted.length)
    progressCalc = Math.round(progressCalc * 100)
    const [progress, setProgress] = React.useState(progressCalc);

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
                <LinearProgress variant="determinate" value={progress} />
                <br />
                <Typography variant="h5" color={colors["primary"]} sx={{fontWeight: 'bold'}}>
                    {progress}{percent} Complete
                </Typography>
                <br />
                <br />
                <br />
                <UserSearchForProgressBar voted={ballot.voted} notVoted={ballot.notVoted} />
            </section>
        </div>
    );
}

