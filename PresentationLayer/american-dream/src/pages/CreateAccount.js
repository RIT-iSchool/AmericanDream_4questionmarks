import logo from "../assets/logo.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ROLE } from "../utils/role";

export default function CreateAccount({ props }) {
    let userRole = ROLE.administrator; // TODO: get from database
    const navigate = useNavigate();

    // role must be admin
    React.useEffect(() => {
        console.log("whats my role? ", userRole);
        console.log("am i admin? ", userRole !== ROLE.administrator);
        if (userRole !== ROLE.administrator) {
            console.log("i'm not an admin");
            navigate("ballotList", { replace: true });
        }
    }, [userRole, navigate]);

    var societies = [
        {
            id: 0,
            title: "Clown Society",
            link: "/",
        },
        {
            id: 1,
            title: "Labor Union",
            link: "/",
        },
        {
            id: 2,
            title: "Association for Computing Machinery",
            link: "/",
        },
    ];

    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "",
        society: "",
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [role, setRole] = React.useState("");
    const [roleErr, setRoleErr] = useState("");
    const [society, setSociety] = React.useState("");
    const [societyErr, setSocietyErr] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    console.log(errorMsg);

    const createUser = (event) => {
        event.preventDefault();
        setErrorMsg("");

        if (email === "") {
            setErrorMsg("Invalid email");
        }
        if (password.length < 8) {
            setPasswordErr(true);
            setErrorMsg("Invalid password");
        }
        if (role === "") {
            setRoleErr(true);
            setErrorMsg("Please pick a role");
        }
        if (society === "") {
            setSocietyErr(true);
            setErrorMsg("Please pick a society");
        }
        if (
            email &&
            password &&
            errorMsg === "" &&
            !passwordErr &&
            !roleErr & !societyErr
        ) {
            setUser({
                ...user,
                email: email,
                password: password,
                role: role,
                society: society,
            });
            setErrorMsg("");
            console.log("new user: " + JSON.stringify(user));
        }
    };

    return (
        <Container maxWidth="sm" className="loginContainer">
            <Stack spacing={10} direction="column" sx={{ textAlign: "center" }}>
                <div>
                    <img
                        src={logo}
                        className="logo"
                        alt="4 question marks logo"
                    />
                </div>

                <form onSubmit={createUser}>
                    <Stack direction={"column"} spacing={4}>
                        <Stack direction="column" spacing={0}>
                            <Typography variant="h2" color="primary">
                                Create a New User
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="error"
                                sx={{ height: "24px" }}
                            >
                                {errorMsg}
                            </Typography>
                        </Stack>

                        <Stack direction={"column"} spacing={2}>
                            <TextField
                                label="Email"
                                type="email"
                                InputLabelProps={{
                                    style: { color: "#DBC3A1" },
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email}
                            />

                            <TextField
                                label="Password"
                                type="password"
                                InputLabelProps={{
                                    style: { color: "#DBC3A1" },
                                }}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                value={password}
                                error={passwordErr}
                            />
                        </Stack>

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
                                value={role}
                                label="Age"
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                error={roleErr}
                            >
                                <MenuItem value={ROLE.member}>Member</MenuItem>
                                <MenuItem value={ROLE.officer}>
                                    Officer
                                </MenuItem>
                                <MenuItem value={ROLE.employee}>
                                    Employee
                                </MenuItem>
                                <MenuItem value={ROLE.administrator}>
                                    Administrator
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel
                                id="demo-simple-select-label"
                                InputLabelProps={{
                                    style: { color: "#DBC3A1" },
                                }}
                            >
                                Society
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={society}
                                label="Society"
                                onChange={(e) => {
                                    setSociety(e.target.value);
                                }}
                                error={societyErr}
                            >
                                {societies.map((society, index) => {
                                    return (
                                        <MenuItem
                                            key={society.id}
                                            value={society.id}
                                        >
                                            {society.title}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>

                        <Stack direction={"column"} spacing={2}>
                            <Button variant="contained" type="submit">
                                <Typography variant="h7">
                                    Create User
                                </Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Stack>
        </Container>
    );
}
