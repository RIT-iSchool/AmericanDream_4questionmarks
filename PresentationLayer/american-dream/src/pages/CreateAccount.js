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
            id: 1,
            title: "Professional Society",
            link: "/",
        },
        {
            id: 2,
            title: "American Dream",
            link: "/",
        }
    ];
    
    const roleMap = {
        "Professional society members": 1,  // ID for 'Professional society members'
        "Professional society officers": 2, // ID for 'Professional society officers'
        "American Dream employees": 3,      // ID for 'American Dream employees'
        "American Dream administrators": 4  // ID for 'American Dream administrators'
    };

    const [fName, setFirstName] = useState("");
    const [lName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roleName, setRoleName] = useState("");
    const [societyID, setSocietyID] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    console.log(errorMsg);
    
    
    const validateForm = () => {
        if (fName === "" || lName === "" || email === "" || password.length < 8 || roleName === "" || societyID === "") {
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
                fName,
                lName,
                email,
                password,
                roleID,
                societyID
            };
            console.log(societyID);
            console.log(fName);
            axios.post('http://localhost:8080/users', newUser)
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
                <div>
                    <img src={logo} className="logo" alt="4 question marks logo" />
                </div>
                
                <form onSubmit={createUser}>
                    <Stack direction="column" spacing={4}>
                        <Stack direction="column" spacing={0}>
                            <Typography variant="h2" color="primary">
                                Create a New User
                            </Typography>
                            {errorMsg && (
                                <Typography
                                    variant="subtitle1"
                                    color="error"
                                    sx={{ height: "24px" }}
                                >
                                    {errorMsg}
                                </Typography>
                            )}
                        </Stack>

                        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", width: '100%' }}>
                        <TextField
                            label="First Name"
                            value={fName}
                            onChange={(e) => setFirstName(e.target.value)}
                            margin="normal"
                            InputLabelProps={{ style: { color: '#DBC3A1' } }}                         
                        />
                
                       <TextField
                           label="Last Name"
                           value={lName}
                           onChange={(e) => setLastName(e.target.value)}
                           margin="normal"
                           InputLabelProps={{ style: { color: '#DBC3A1' } }}
                       />
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: "center", width: '100%' }}>
                      <TextField
                          label="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          margin="normal"
                          InputLabelProps={{ style: { color: '#DBC3A1' } }}
                      />
                      <TextField
                          label="Password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          margin="normal"
                          InputLabelProps={{ style: { color: '#DBC3A1' } }}
                      />
                      </Stack>
                    
                    <FormControl fullWidth margin="normal">
                        <InputLabel 
                          id="role-select-label"
                          sx={{ color: '#DBC3A1' }}
                          >
                          Role
                        </InputLabel>
                        <Select 
                        value={roleName} 
                        onChange={(e) => 
                        setRoleName(e.target.value)} 
                        required
                        >
                          {Object.keys(roleMap).map((name, index) => (
                            <MenuItem key={index} value={name}>{name}</MenuItem>
                          ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel 
                            id="society-select-label"
                            sx={{ color: '#DBC3A1' }}
                            >Society</InputLabel>
                        <Select
                            labelId="society-select-label"
                            value={societyID}
                            label="Society"
                            onChange={(e) => setSocietyID(e.target.value)}
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
                    <Stack direction={"column"} spacing={2}>
                        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                            Create User
                        </Button>
                    </Stack>
                    </Stack>
                </form>
            </Stack>
        </Container>
    );
}
