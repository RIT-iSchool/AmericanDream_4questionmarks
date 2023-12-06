import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ROLE } from "../utils/role.js";
import Page from "../components/Page.js";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import { sampleUsers } from "../utils/sampleUsers.js";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function UserRow({ user, isOfficer, remove }) {
    return (
        <div className={isOfficer ? "user-row officer" : "user-row"}>
            <Typography
                variant="body"
                color={colors["on-surface"]}
                className="user-row-name"
            >
                {user.fname} {user.lname}
            </Typography>

            <Button
                variant="text"
                onClick={() => {
                    if (!isOfficer) {
                        remove(user);
                    }
                }}
            >
                {isOfficer ? "OFFICER" : "x"}
            </Button>
        </div>
    );
}
