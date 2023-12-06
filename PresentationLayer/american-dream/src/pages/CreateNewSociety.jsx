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
import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";

export default function CreateSociety() {
    const role = ROLE.administrator; // from db
    const navigate = useNavigate();

    // from db
    const users = sampleUsers;
    const [addedUsers, setAddedUsers] = React.useState([]);

    const removeUser = (user) => {
        let index = addedUsers.indexOf(user);
        if (index > -1) {
            addedUsers.splice(index, 1);
            setAddedUsers(addedUsers);
            setRandomStateCounter(randomStateCounter + 1);
        } else {
            console.log("element could not be removed: ", user);
        }
        console.log("removedUser, ", addedUsers);
    };

    const addUserToSociety = (userId) => {
        const wantToAdd = users.filter((usr) => {
            return usr.id === userId;
        });
        console.log("want to add", wantToAdd[0]);

        const tempUsers = JSON.parse(JSON.stringify(addedUsers));
        tempUsers.push(wantToAdd[0]);
        return tempUsers;
    };

    const [name, setName] = React.useState("");
    const [nameErr, setNameErr] = React.useState("");
    const [officer, setOfficer] = React.useState(-1);
    const [officerErr, setOfficerErr] = React.useState("");
    const [user, setUser] = React.useState(-1);
    const [randomStateCounter, setRandomStateCounter] = React.useState(); // needed to make delete show up
    const [errMsg, setErrorMsg] = React.useState("");

    // role must be admin
    React.useEffect(() => {
        if (role !== ROLE.administrator) {
            navigate("ballotList", { replace: true });
        }
    }, [role, navigate]);

    const handleCreate = (event) => {
        console.log("here");
        event.preventDefault();
        setErrorMsg("");

        if (name === "") {
            setNameErr(true);
            setErrorMsg("Enter a name");
        }
        if (officer === -1) {
            setOfficerErr(true);
            setErrorMsg("Please select an officer");
        }
        if (name && officer && errMsg === "" && !nameErr && !officerErr) {

            const usersWithOfficer = addUserToSociety(officer);

            console.log(
                JSON.stringify({
                    society: {
                        name: name,
                        officerId: officer,
                        users: usersWithOfficer,
                    },
                }, null, 2)
            );
            return {
                society: {
                    name: name,
                    officerId: officer,
                    users: usersWithOfficer,
                },
            };
        }
    };

    return (
        <Page title="Create Society">
            <form onSubmit={handleCreate}>
                <Stack
                    spacing={4}
                    direction="column"
                    sx={{ textAlign: "center" }}
                >
                    <Typography variant="h2" color="primary">
                        Create a New Society
                    </Typography>

                    <Typography variant="body" color="error">
                        {errMsg}
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
                        error={nameErr}
                    />

                    <FormControl fullWidth>
                        <InputLabel
                            id="demo-simple-select-label"
                            InputLabelProps={{
                                style: { color: "#DBC3A1" },
                            }}
                        >
                            Officer
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={officer}
                            label="Age"
                            onChange={(e) => {
                                setOfficer(e.target.value);
                                setOfficerErr(false)
                            }}
                            error={officerErr}
                        >
                            {users.map((user, index) => {
                                if (user.userType !== ROLE.officer) {
                                    //console.log(user.name, ", " + user.role);
                                    return <></>;
                                }
                                return (
                                    <MenuItem key={user.id} value={user.id}>
                                        {user.fname} {user.lname}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>

                    <Typography variant="h5" color="primary">
                        Added Users
                    </Typography>
                    <div className="userList">
                        {officer === -1 ? (
                            <></>
                        ) : (
                            <UserRow user={users[officer]} isOfficer={true} showRight={true} />
                        )}

                        {/* Map out the list of users added to the society */}
                        {addedUsers.map((user, index) => {
                            return (
                                <UserRow
                                    key={index}
                                    user={user}
                                    isOfficer={false}
                                    remove={removeUser}
                                    showRight={true} 
                                />
                            );
                        })}
                    </div>

                    <Stack
                        spacing={4}
                        direction="row"
                        sx={{ textAlign: "center" }}
                    >
                        <FormControl fullWidth>
                            <InputLabel
                                id="demo-simple-select-label"
                                InputLabelProps={{
                                    style: { color: "#DBC3A1" },
                                }}
                            >
                                User
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={user}
                                label="Age"
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            >
                                {users
                                    .filter((n) => !addedUsers.includes(n))
                                    .map((user, index) => {
                                        if (user === users[officer]) {
                                            return <></>;
                                        }
                                        return (
                                            <MenuItem
                                                key={user.id}
                                                value={user.id}
                                            >
                                                {user.fname} {user.lname}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </FormControl>
                        <Button
                            variant="text"
                            onClick={() => {
                                if (user > -1) {
                                    setAddedUsers(addUserToSociety(user));
                                    setUser(-1);
                                }
                            }}
                        >
                            <Add />
                        </Button>
                    </Stack>

                    <Button variant="contained" type="submit">
                        Create
                    </Button>
                </Stack>
            </form>
        </Page>
    );
}
