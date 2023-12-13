import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    const navigate = useNavigate();
    const role = ROLE.administrator;

    const [officers, setOfficers] = useState([]);
    const [members, setMembers] = useState([]);
    const [addedUsers, setAddedUsers] = useState([]);
    const [selectedOfficer, setSelectedOfficer] = useState('');
    const [selectedMember, setSelectedMember] = useState('');
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [officer, setOfficer] = useState('');
    const [officerErr, setOfficerErr] = useState(false);
    const [errMsg, setErrorMsg] = useState("");
	


        useEffect(() => {
        if (role !== ROLE.administrator) {
            navigate("ballotList", { replace: true });
        }

        fetchUsersByRole(2); // Role ID for officers
        fetchUsersByRole(1); // Role ID for members
    }, [role, navigate]);

    
	const fetchUsersByRole = (roleId) => {
		axios.get(`http://localhost:8080/users/role/${roleId}`)
			.then(response => {
				if (roleId === 2) { // Assuming 2 is the role ID for officers
					setOfficers(response.data);
				} else if (roleId === 1) { // Assuming 1 is the role ID for members
					setMembers(response.data);
				}
			})
			.catch(error => console.error(`Error fetching role ${roleId}:`, error));
	};

	const handleCreate = (event) => {
		event.preventDefault();
		if (!name) {
			setNameErr(true);
			setErrorMsg("Enter a society name");
			return;
		}

		// Construct society object for the request
		const societyData = {
			societyName: name,
			// Add other fields if necessary (like officerId, memberIds, etc.)
		};

		// Send POST request to create society
		axios.post('http://localhost:8080/societies', societyData)
			.then(response => {
				console.log('Society Created:', response.data);
				// Handle further logic on successful creation (like redirecting)
			})
			.catch(error => {
				console.error('Error creating society:', error);
				setErrorMsg("An error occurred while creating the society.");
			});
	};

    const addMemberToSociety = () => {
        const memberToAdd = members.find(member => member.userID === selectedMember);
        if (memberToAdd && !addedUsers.some(user => user.userID === memberToAdd.userID)) {
            setAddedUsers(prevUsers => [...prevUsers, memberToAdd]);
            setSelectedMember(''); // Reset member selection
        }
    };

    return (
        <Page title="Create Society">
            <form onSubmit={handleCreate}>
                <Stack spacing={4} direction="column" sx={{ textAlign: "center" }}>
                    <Typography variant="h2" color="primary">Create a New Society</Typography>
                    <Typography variant="body" color="error">{errMsg}</Typography>

                    <TextField
                        label="Society Name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        required
                        value={name}
                        error={nameErr}
						 InputLabelProps={{ style: { color: '#DBC3A1' } }}
                    />
			{
				/*
                    <FormControl fullWidth>
                        <InputLabel id="officer-select-label" sx={{ color: '#DBC3A1' }}>Officer</InputLabel>
                        <Select
                            labelId="officer-select-label"
                            value={selectedOfficer}
                            onChange={(e) => setSelectedOfficer(e.target.value)}
                        >
                            {officers.map((officer) => (
                                <MenuItem key={officer.userID} value={officer.userID}>
                                    {officer.fName} {officer.lName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Stack direction="row" spacing={2} alignItems="center">
                    <FormControl fullWidth>
                        <InputLabel id="member-select-label" sx={{ color: '#DBC3A1' }}>Member</InputLabel>
                        <Select
                            labelId="member-select-label"
                            value={selectedMember}
                            onChange={(e) => setSelectedMember(e.target.value)}
							sx={{ color: '#DBC3A1' }}
                        >
                            {members.map((member) => (
                                <MenuItem key={member.userID} value={member.userID}>
                                    {member.fName} {member.lName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button onClick={addMemberToSociety}>
                        <Add />
                    </Button>
                </Stack>
		

                    <Typography variant="h5" color="primary">Added Users</Typography>
                    <div className="userList">
                        {addedUsers.map((user, index) => (
                            <UserRow key={index} user={user} />
                        ))}
                    </div>
			*/
		}
                    <Button variant="contained" type="submit">Create</Button>
                </Stack>
            </form>
        </Page>
    );
}