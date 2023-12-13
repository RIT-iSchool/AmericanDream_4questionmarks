import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { colors } from '../../utils/colors';
import styled from "@emotion/styled";
import "../../assets/css/styles.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';

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

export default function Offices({ballotOffices,setBallotOffices,setTabValue}) {
    const [addOffice, setAddOffice] = React.useState(false);

    const [role, setRole] = React.useState('');
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }

    const [numVotes, setNumVotes] = React.useState(0);
    const handleNumVotesChange = (event) => {
        setNumVotes(event.target.value);
    }

    const [writeInPossible, setWriteInPossible] = React.useState(false);
    const handleWriteInPossibleChange = (event) => {
        setWriteInPossible(event.target.checked);
    }

    const [errors, setErrors] = React.useState({
        role: false,
        numVotes: false,
    });

    return (
        <Stack direction="column" spacing={5}>
            <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                    <Typography variant="h6">Offices</Typography>
                    <Typography variant="body2" style={{paddingBottom:'4px'}}>{`(${ballotOffices.length} total)`}</Typography>
                </Stack>

                {ballotOffices.length === 0 && !addOffice &&
                    <Button variant="outlined" onClick={() => {
                        setAddOffice(true);
                        console.log('ballotOffices:');
                        console.log(ballotOffices);
                    }}>Add an Office</Button>
                }

                {addOffice &&
                    <>
                    <FormTextField label="Role/Office Position" onChange={handleRoleChange} error={errors.role} />
                    
                    {/* TODO: restrict input to numbers only */}
                    <FormTextField label="Number of Possible Votes" onChange={handleNumVotesChange} error={errors.numVotes} />

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Stack direction='row' spacing={1}>
                            <PersonOutlineOutlinedIcon />
                            <Typography variant='body2'>Allow for one write-in?</Typography>
                        </Stack>

                        <Checkbox onChange={(e) => handleWriteInPossibleChange(e)} />
                    </Stack>

                    {/* TODO: refactor addition into one reusable function */}
                    <Button variant="outlined" onClick={() => {
                       //data validation
                        if(role!=="" && numVotes>0) {
                            console.log(`role: ${role}, numVotes: ${numVotes}, ballotOffices.length: ${ballotOffices.length}`);

                            //make temp office obj
                            var office = {
                                id: `o${ballotOffices.length+1}`,
                                name: role,
                                choices: numVotes,
                                candidates: []
                            }

                            //add to ballot offices
                            setBallotOffices([
                                ...ballotOffices,
                                office
                            ]);

                            console.log('added office to ballotOffices array');

                            //reset and clear current inputs
                            setRole("");
                            setNumVotes("");
                            setWriteInPossible(false);

                        } else {
                            console.log('invalid form');
                            //TODO: error handling and styling
                        }
                    }}>Add Another Office</Button>

                    <Button variant="contained" onClick={() => {
                        //data validation
                        if(role!=="" && numVotes>0) {
                            console.log(`role: ${role}, numVotes: ${numVotes}, ballotOffices.length: ${ballotOffices.length}`);

                            //make temp office obj
                            var office = {
                                id: `o${ballotOffices.length+1}`,
                                name: role,
                                choices: numVotes,
                                candidates: []
                            }

                            //add to ballot offices
                            setBallotOffices([
                                ...ballotOffices,
                                office
                            ]);

                            console.log('added office to ballotOffices array');

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