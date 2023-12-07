import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ROLE } from "../utils/role.js";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import { Link } from "react-router-dom";

export default function BallotBox({ ballot, role, editOnClick }) {

    return (
        <Link to={editOnClick ? "/editBallot" : ballot.hasStarted & !ballot.isFinished ? "/openBallot" : "/ballotList"} style={{ textDecoration: "none" }}>
            <div className={ballot.isFinished ? "ballot-box box-finished" : "ballot-box"}>
                <Typography variant="h6" color={colors["on-surface"]}>
                    {ballot.title}
                </Typography>
                <Typography variant="p" color={colors["on-surface-variant"]}>
                    {ballot.date}
                </Typography>
                <br />
                <br />
                {/* Edit */}
                {role === ROLE.administrator && !ballot.hasStarted ? (
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Typography
                            variant="p"
                            color={colors["primary"]}
                            fontWeight={"bold"}
                        >
                            Edit
                        </Typography>
                    </Link>
                ) : (
                    <></>
                )}

                {/* See Progress */}
                {role === ROLE.officer && !ballot.isFinished  && ballot.hasStarted ? (
                    <Link to={"/progress"} style={{ textDecoration: "none" }}>
                        <Typography
                            variant="p"
                            color={colors["primary"]}
                            fontWeight={"bold"}
                        >
                            See Progress
                        </Typography>
                    </Link>
                ) : (
                    <></>
                )}

                {/* See Results */}
                {(role === ROLE.officer || role === ROLE.administrator) && ballot.isFinished ? (
                    <Link to={"/results"} style={{ textDecoration: "none" }}>
                        <Typography
                            variant="p"
                            color={colors["primary"]}
                            fontWeight={"bold"}
                        >
                            See Results
                        </Typography>
                    </Link>
                ) : (
                    <></>
                )}

            </div>
        </Link>
    );
}
