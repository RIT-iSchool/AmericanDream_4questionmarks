import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Paper, Stack, TextField } from '@mui/material';
import { colors } from '../../utils/colors';
import styled from "@emotion/styled";
import "../../assets/css/styles.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';

const FormTextField = styled(TextField)({
    '& .MuiFormLabel-root': {
        color: colors["on-surface-variant"],
    },
    '& label.Mui-focused': {
        color: colors["primary"],
    },
});

const formHeadingStyle = {
    borderBottom:`1px solid ${colors["surface-variant"]}`, 
    color: colors["on-background"], 
    padding:'4px 0'
}

const getOffices = (ballotOffices) => {
    var offices = [];

    ballotOffices.forEach(ballotOffice => {
        offices.push(ballotOffice.name)
    });

    return offices;
}

export default function Candidates({ballotOffices,setBallotOffices,setTabValue}) {
    const offices = getOffices(ballotOffices);
    
    const [office, setOffice] = React.useState("");
    const handleOfficeChange = (event) => {
        setOffice(event.target.value);
    }

    const [candidates, setCandidates] = React.useState([]);
    const [addCandidate, setAddCandidate] = React.useState(false);

    const [name, setName] = React.useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const [title, setTitle] = React.useState('');
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [bio, setBio] = React.useState('');
    const handleBioChange = (event) => {
        setBio(event.target.value);
    }

    const updateOfficeBallots = (officeId, candidatesArr) => {
        console.log(`updateOfficeBallots(${officeId},candidatesArr)`);

        //get office id from id string parameter
        const index = parseInt(officeId.substring(2, officeId.length))-1;
        
        const newOffices = [...ballotOffices]; //copy array
        const newOffice = {...ballotOffices[index]}; //copy array item to change

        newOffice[candidates] = candidatesArr;
        newOffices[index] = newOffice;

        setBallotOffices(newOffices);
        console.log('new ballotOffice array');
        console.log(ballotOffices);
    }

    const [errors, setErrors] = React.useState({
        name: false,
        title: false,
        bio: false,
    });
    
    return (
        <Stack direction="column" spacing={5}>
            <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                    <Typography variant="h6">Candidate {office.name!=="" ? `for ${office}` : ""}</Typography>
                    {office ? 
                        <Typography variant="body2" style={{paddingBottom:'4px'}}>{'(' + candidates.length +' total)'}</Typography>
                    : ""}
                </Stack>

                <Select
                    value={office}
                    label="Office"
                    onChange={handleOfficeChange}>
                    
                    {offices.map((office) => {
                        return (
                            <MenuItem key={office} value={office}>{office}</MenuItem>
                        )
                    })}
                </Select>

                {office.name!="" &&
                <>
                    <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                        <Typography variant="h6">Candidate Details</Typography>
                    <Typography variant="body2" style={{paddingBottom:'4px'}}>{'#' + (candidates.length+1)}</Typography>
                    </Stack>
                    
                    <Stack direction='column' spacing={4}>
                        <FormTextField label="Name" onChange={handleNameChange} error={errors.name} />
                        <FormTextField label="Title" onChange={handleTitleChange} error={errors.title} />
                        <FormTextField label="Bio" onChange={handleBioChange} errors={errors.bio} />
                        {/* TODO: image upload */}
                    </Stack>

                    <Button variant="outlined" onClick={() => {//data validation
                        if(name!=="" && title!=="" && bio!=="") {
                            console.log(`name: ${name}, title: ${title}, bio: ${bio}`);

                            //make temp candidate obj
                            var temp = {
                                id: `c${candidates.length+1}`,
                                name: name,
                                position: title,
                                bio: bio
                            }

                            console.log('temp to add to candidates and ballotOffices array');
                            console.log(temp);

                            //add to candidates array
                            setCandidates([
                                ...candidates,
                                temp
                            ]);

                            //get office index from name
                            var officeIndex = -1;
                            ballotOffices.forEach((ballotOffice,index) => {
                                if (office === ballotOffice.name) {
                                    console.log(`${office} found at index ${index}`);
                                    officeIndex = index;
                                } else {
                                    console.log(`${office} not found`);
                                }
                            });

                            //save candidates to ballotOffices
                            ballotOffices[officeIndex].candidates = candidates;
                            console.log(`added candidate to ${office} candidates array`);

                            //reset and clear current inputs
                            setName("");
                            setTitle("");
                            setBio("");
                        } else {
                            console.log('invalid form');
                            //TODO: error handling and styling
                        }
                    }}>
                        Add Another Candidate for {office}
                    </Button>
                    
                    <Button variant="contained" onClick={() => {
                        //data validation
                        if(name!=="" && title!=="" && bio!=="") {
                            console.log(`name: ${name}, title: ${title}, bio: ${bio}`);

                            //make temp candidate obj
                            var temp = {
                                id: `c${candidates.length+1}`,
                                name: name,
                                position: title,
                                bio: bio
                            }

                            console.log('temp to add to candidates and ballotOffices array');
                            console.log(temp);

                            //add to candidates array
                            setCandidates([
                                ...candidates,
                                temp
                            ]);

                            //get office index from name
                            var officeIndex = -1;
                            ballotOffices.forEach((ballotOffice,index) => {
                                if (office === ballotOffice.name) {
                                    console.log(`${office} found at index ${index}`);
                                    officeIndex = index;
                                } else {
                                    console.log(`${office} not found`);
                                }
                            });

                            //save candidates to ballotOffices
                            ballotOffices[officeIndex].candidates = candidates;
                            console.log(`added candidate to ${office} candidates array`);

                            //go to next tab
                            //setTabValue('3');
                        } else {
                            console.log('invalid form');
                            //TODO: error handling and styling
                        }
                    }}>
                        Save
                    </Button>
                </>
                }
            </Stack>

            {/* <Stack direction="row-reverse">
                <Button>done</Button>
                <Button>back</Button>
            </Stack> */}
        </Stack>
    )
}