import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ROLE } from "../utils/role.js";
import CustomAppBar from "../components/CustomAppBar.js";
import BallotBox from "../components/BallotBox";

function BallotList() {

    var role = ROLE.officer;

    var ballots = [
        {
            title: "2023 Union Government Election",
            date: "September 10 - October 12",
            isFinished: false,
            hasStarted: true,
        }, 
        {
            title: "Government Election",
            date: "Ocober 10 - November 2",
            isFinished: false,
            hasStarted: false,
        }, 
        {
            title: "Event Catering",
            date: "August 1 - September 1",
            isFinished: true,
            hasStarted: true,
        }, 
    ];

    return (
        <div>
            <CustomAppBar pageName={"Ballot List"} />

            <div className="ballot-box-wrapper">
            {
                /* Ballot Boxes */
                ballots.map(
                    ( ballot, index ) => ( 
                        <BallotBox key={index} role={role} ballot={ballot} />
                 ) )
            }
            </div>

            
        </div>
    );
}

export default BallotList;
