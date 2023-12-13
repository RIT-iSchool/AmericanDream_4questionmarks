import logo from "../assets/logo.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ROLE } from "../utils/role";

export default function CreateAccount({ props }) {
    let userRole = ROLE.administrator; // get from database
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
    
    const roleMap = {
        "Professional society members": 1,  // ID for 'Professional society members'
        "Professional society officers": 2, // ID for 'Professional society officers'
        "American Dream employees": 3,      // ID for 'American Dream employees'
        "American Dream administrators": 4  // ID for 'American Dream administrators'
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roleName, setRoleName] = useState("");
    const [societyId, setSocietyId] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    console.log(errorMsg);
    
    
    const validateForm = () => {
        if (email === "" || password.length < 8 || roleName === "" || societyId === "") {
            setErrorMsg("Please fill in all required fields");
            return false;
        }
        return true;
    };
    

    const createUser = (event) => {
        event.preventDefault();
        setErrorMsg("");
        
        const roleID = roleMap[roleName];

        if (validateForm()) {
            const newUser = {
                fName: firstName,
                lName: lastName,
                email,
                password,
                role: RoleID,
                societyId
            };

            axios.post('/createUser', newUser)
            .then(response => {
                console.log('Success:', response.data);
                // do something else?
            })
            .catch(error => {
                console.error('Error:', error);
                setErrorMsg("An error occurred while creating the user.");
            });
        }
    };

  return (
        <Container maxWidth="sm" className="loginContainer">
            <Stack spacing={10} direction="column" sx={{ textAlign: "center" }}>
                <form onSubmit={createUser}>
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select 
                        value={roleName} 
                        onChange={(e) => 
                        setRoleName(e.target.value)} 
                        required
                        >
                          {Object.keys(ROLE_MAPPINGS).map((name, index) => (
                            <MenuItem key={index} value={name}>{name}</MenuItem>
                          ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="society-select-label">Society</InputLabel>
                        <Select
                            labelId="society-select-label"
                            value={societyId}
                            label="Society"
                            onChange={(e) => setSocietyId(e.target.value)}
                            required
                        >
                            {societies.map((society) => (
                                <MenuItem key={society.id} value={society.id}>
                                    {society.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {errorMsg && (
                        <Typography color="error" margin="normal">{errorMsg}</Typography>
                    )}
                    <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                        Create User
                    </Button>
                </form>
            </Stack>
        </Container>
    );
}
