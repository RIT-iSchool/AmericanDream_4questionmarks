import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const style = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
}

function App() {
    return (
        <Stack direction="column" spacing={6} sx={{...style,paddingTop:'10%'}}>
            
            <Stack direction="column" sx={{...style}}>
                <Typography variant="h1" color={colors["on-surface"]}>
                    American Dream
                </Typography>

                <Typography variant="h4" color={colors["on-surface-variant"]} >debugging screen</Typography>
            </Stack>

            <Stack direction="column" spacing={2} sx={{...style}}>

                <Link to={"login"}>
                    <Button variant="contained">Go to login</Button>
                </Link>
                <Link to={"createAccount"}>
                    <Button variant="contained">Go to create account</Button>
                </Link>
                <Link to={"ballotList"}>
                    <Button variant="contained">Go to BallotList</Button>
                </Link>
                <Link to={"createBallot"}>
                    <Button variant="contained">Create Ballot</Button>
                </Link>
                <Link to={"societies"}>
                    <Button variant="contained">Go to Societies</Button>
                </Link>
                <Link to={"statistics"}>
                    <Button variant="contained">Statistics</Button>
                </Link>
            </Stack>
        </Stack>
    );
}

export default App;
