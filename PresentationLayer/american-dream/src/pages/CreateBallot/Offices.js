import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Page from '../../components/Page';
import { Button, Paper, Stack, TextField } from '@mui/material';
import { colors } from '../../utils/colors';
import styled from "@emotion/styled";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import "../../assets/css/styles.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
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

const formContainerStyle = {
    padding: '40px 50px',
    borderRadius: '10px',
    backgroundColor: colors["purple"],
  }

const formHeadingStyle = {
    borderBottom:`1px solid ${colors["surface-variant"]}`, 
    color: colors["on-background"], 
    padding:'4px 0'
}

export default function Offices() {
    //TODO: refactor into one object state
    //var offices = ['President', 'Vice President', 'Secretary'];

    const [office, setOffice] = React.useState("");
    const [offices, setOffices] = React.useState([]);
    const [addOffice, setAddOffice] = React.useState(false);
    const [officeAdded, setOfficeAdded] = React.useState(false);

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
    
    const handleAddAnotherOffice = (event) => {
    //input validation 
    //error handling + styles
    if (role!=="" && numVotes!="") {
        //valid, add to offices array
        offices.push({
            name: role,
            choices: numVotes, //TODO: validate input is a number
            writeIn: writeInPossible
        });
        console.log('valid, pushed to offics array');
        console.log(offices);
        
        //clear input, make sure offices.length updates #n on header
        setRole("");
        setNumVotes(0);
    } else {
        //invalid, show errors
        if(role=="") {
        setErrors({...errors, role:true});
        console.log('invalid, missing role');
        }
        if(numVotes=="") {
        setErrors({...errors, numVotes:true});
        console.log('invalid, missing num votes');
        }
    }

    //TODO: user notification: added to offices
    };

    const [errors, setErrors] = React.useState({
        role: false,
        numVotes: false,
    });

    return (
        <Stack direction="column" spacing={5}>
            <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                    <Typography variant="h6">Offices</Typography>
                    <Typography variant="body2" style={{paddingBottom:'4px'}}>{'#' + (offices.length+1)}</Typography>
                </Stack>

                {offices.length === 0 && !addOffice &&
                    <Button variant="outlined" onClick={() => {
                        setAddOffice(true);
                        console.log('offices:');
                        console.log(offices);
                    }}>Add an Office</Button>
                }

                {addOffice &&
                    <>
                    <p>role: {role}, numVotes: {numVotes}</p>
                    <FormTextField label="Role/Office Position" onChange={handleRoleChange} error={errors.role} />
                    
                    {/* TODO: restrict input to numbers only */}
                    <FormTextField label="Number of Possible Votes" onChange={handleNumVotesChange} error={errors.numVotes} />

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Stack direction='row' spacing={1}>
                            <PersonOutlineOutlinedIcon />
                            <Typography variant='body2'>Allow for one write-in?</Typography>
                        </Stack>

                        <Checkbox onChange={(e) => handleWriteInPossibleChange(e)
                        } />
                    </Stack>

                    <Button variant="contained" onClick={() => {handleAddAnotherOffice()}}>Add Another Office</Button>
                    </>
                }
            </Stack>

            <Stack direction="row-reverse">
                <Button>done</Button>
                <Button>back</Button>
            </Stack>
        </Stack>
    )
}