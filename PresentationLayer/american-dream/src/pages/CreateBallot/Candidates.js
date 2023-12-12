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

export default function Candidates() {
    //TOOD: load offices from previously created offices
    var offices = ['President', 'Vice President', 'Secretary'];

    const [office, setOffice] = React.useState('');
    const handleOfficeChange = (event) => {
        setOffice(event.target.value);
    }

    const [candidate, setCandidate] = React.useState({});
    const [candidates, setCandidates] = React.useState([]);
    const [addCandidate, setAddCandidate] = React.useState(false);
    const [candidateAdded, setCandidateAdded] = React.useState(false);

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

    const handleAnotherCandidate = (event) => {
        //input validation, error handling + styles
        if (name!=="" && title!=="" && bio!=="") {
            console.log(`valid, pushing to candidates array for ${office}`);
            candidates.push({
                name: name,
                title: title,
                bio: bio,
            });
            console.log(candidates);
            
            //clear input, make sure offices.length updates #n on header
            setName("");
            setTitle("");
            setBio("");
        } else {
            //invalid, show errors
            if(name=="") {
                setErrors({...errors, name:true});
                console.log('invalid, missing name');
            }
            if(title=="") {
                setErrors({...errors, title:true});
                console.log('invalid, missing title');
            }
            if(bio=="") {
                setErrors({...errors, bio:true});
                console.log('invalid, missing bio');
            }
        }
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
                    <Typography variant="h6">Candidate {office ? `for ${office}` : ""}</Typography>
                </Stack>

                <Select
                    value={office}
                    label="Office"
                    onChange={handleOfficeChange}>
                    
                    {offices.map((office) => {
                        return (
                            <MenuItem value={office}>{office}</MenuItem>
                        )
                    })}
                </Select>

                {office!="" &&
                <>
                    <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                        <Typography variant="h6">Candidate Details</Typography>
                    </Stack>
                    
                    <Stack direction='column' spacing={4}>
                        <FormTextField label="Name" onChange={handleNameChange} />
                        <FormTextField label="Title" onChange={handleTitleChange} />
                        <FormTextField label="Bio" onChange={handleBioChange} />
                        {/* TODO: image upload */}
                    </Stack>

                    <Button variant="contained" onClick={() => {setAddCandidate(true)}}>
                        {candidates.length > 1 ? `Add Another Candidate for ${office}` : `Add Candidate for ${office}`}
                    </Button>
                </>
                }

            </Stack>

            <Stack direction="row-reverse">
                <Button>next</Button>
                <Button>back</Button>
            </Stack>
        </Stack>
    )
}