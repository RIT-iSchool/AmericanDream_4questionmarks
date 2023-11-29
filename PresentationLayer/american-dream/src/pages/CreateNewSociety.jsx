import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
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
import UserRow from "../components/userRow.jsx";

export default function CreateSociety() {
    const role = ROLE.administrator; // from db
    const navigate = useNavigate();

    // from db
    const users = sampleUsers;

    const [name, setName] = React.useState("");
    const [nameErr, setNameErr] = React.useState("");
    const [officer, setOfficer] = React.useState(-1);
    const [officerErr, setOfficerErr] = React.useState("");

    // role must be admin
    React.useEffect(() => {
        if (role !== ROLE.administrator) {
            navigate("ballotList", { replace: true });
        }
    }, [role, navigate]);

    return (
        <Page title="Create Society">
            <Stack spacing={4} direction="column" sx={{ textAlign: "center" }}>
                <Typography variant="h2" color="primary">
                    Create a New Society
                </Typography>

                <TextField
                    label="Society Name"
                    type="text"
                    InputLabelProps={{
                        style: { color: "#DBC3A1" },
                    }}
                    onChange={(e) => setName(e.target.value)}
                    required
                    value={name}
                />

                <FormControl fullWidth>
                    <InputLabel
                        id="demo-simple-select-label"
                        InputLabelProps={{
                            style: { color: "#DBC3A1" },
                        }}
                    >
                        Role
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={officer}
                        label="Age"
                        onChange={(e) => {
                            setOfficer(e.target.value);
                        }}
                        error={officerErr}
                    >
                        {
                            users.map((user, index) => {
                                return <MenuItem
                                key={user.id}
                                value={index}
                            >
                                {user.fname} {user.lname}
                            </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>

                <Typography variant="h5" color="primary">
                    Add users to society
                </Typography>
                <div className="userList">
                    <UserRow user={users[officer]} isOfficer={false} />
                </div>
            </Stack>
        </Page>
    );
}
