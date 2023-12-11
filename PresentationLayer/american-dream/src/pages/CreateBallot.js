import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Page from '../components/Page';
import { Button, Paper, Stack, TextField } from '@mui/material';
import { colors } from '../utils/colors';
import styled from "@emotion/styled";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import "../assets/css/styles.css";
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

const DatePickerField = styled(DatePicker)({
    '& .MuiFormLabel-root': {
        color: colors["on-surface-variant"],
    }
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

export default function CreateBallot() {
  const today = dayjs();
  const [startDate, setStartDate] = React.useState(dayjs()); //dayjs.format() to make it a string
  const [endDate, setEndDate] = React.useState(dayjs()); //https://day.js.org/docs/en/display/format

  const [formPage, setFormPage] = React.useState({
    officersForm: 1,
    candidatesForm: 1,
    initiativesForm: 1,
  });

  //TODO: disable "future" tabs if current tab inputs arent filled out
  const [tabValue, setTabValue] = React.useState('1');
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // - -- - - - - - -- DESCRIPTION TAB - -- - - - - - -- - - ---
  const [ballotName, setBallotName] = React.useState('');
  
  //TODO: load societies list
  const societies = ['Clown Society', 'Labor Union', 'Association for Computing Machinery'];
  const [society, setSociety] = React.useState('');
  const handleSocietyChange = (event) => {
    setSociety(event.target.value);
  };

  // - -- - - - - - -- - OFFICES TAB - -- - - - - - -- - - --- - -
  //TODO: refactor into one object state
  //var offices = ['President', 'Vice President', 'Secretary'];
  var offices = [];
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
        setOffice("");
        setNumVotes("");
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

  // - -- - -  - -- - CANDIDATES TAB - -- - - - - - -- - - --- - - 
  const [office, setOffice] = React.useState('');
  const handleOfficeChange = (event) => {
    setOffice(event.target.value);
  }
  var candidates = ['Candidate1', 'Candidate2', 'Candidate3'];
  const [addCandidate, setAddCandidate] = React.useState(false);

  var initiatives = ['Initiative1', 'Initiative2'];
  const [addInitiative, setAddInitiative] = React.useState(false);
  const [initiative, setInitiative] = React.useState('');

  const [errors, setErrors] = React.useState({
    society: false,
    ballotName: false,
    role: false,
    numVotes: false,
  });

  useEffect(()=>{
  },[errors]);


  return (
    <Page title="Create Ballot">
        <Stack direction="column" spacing={4}>
            <TabContext value={tabValue} variant="fullWidth">
                <Box>
                <TabList onChange={handleTabChange} centered>
                    <Tab label='Description' value="1" />
                    <Tab label='Offices' value="2" />
                    <Tab label='Candidates' value="3" />
                    <Tab label='Initiatives' value="4" />
                </TabList>
                </Box>

                <TabPanel value="1">
                    <Paper sx={{...formContainerStyle}}>
                        <Stack direction="column" spacing={5}>
                            <Stack direction="column" spacing={3}>
                                <Typography variant="h6" style={{...formHeadingStyle}}>Ballot Details</Typography>
                                
                                <Select
                                    error={errors.society}
                                    value={society}
                                    label="Society"
                                    onChange={handleSocietyChange}>
                                    
                                    {societies.map((society) => {
                                        return (
                                            <MenuItem value={society}>{society}</MenuItem>
                                        )
                                    })}
                                </Select>

                                <FormTextField label="Ballot Name" onChange={(event) => {
                                    setBallotName(event.target.value)
                                }} error={errors.ballotName} helperText={errors.ballotName && "Enter a name for the Ballot"} />
                            </Stack>
                            
                            <Stack direction="column" spacing={3}>
                                <Typography variant="h6" style={{...formHeadingStyle}}>Election Dates</Typography>
                                <Stack direction="row" spacing={2} justifyContent="space-between">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePickerField
                                            sx={{width:'48%'}}
                                            label="Start Date"
                                            defaultValue={today}
                                            disablePast
                                            value={startDate}
                                            onChange={(newStartDate) => setStartDate(newStartDate)}
                                        />

                                        <DatePickerField
                                            sx={{width:'48%'}}
                                            label="End Date"
                                            defaultValue={today}
                                            disablePast
                                            value={endDate}
                                            onChange={(newEndDate) => setEndDate(newEndDate)}
                                        />
                                    </LocalizationProvider>
                                </Stack>
                            </Stack>

                            <Stack direction="row-reverse">
                                <Button onClick={() => {
                                    var format = "MMM D YYYY";

                                    //are society, name and dates saved? YES
                                    console.log(`society: ${society}`);
                                    console.log(`ballot name: ${ballotName}`);
                                    console.log(`start date: ${startDate.format(format)}`);
                                    console.log(`end date: ${endDate.format(format)}`);
                                    console.log(`start date <= end date? ${startDate <= endDate}`);

                                    //data validation
                                    if (society!=="" && ballotName!=="" && startDate.format(format)!=="" && endDate.format(format)!=="" && startDate <= endDate) {
                                        //go to description tab
                                        setTabValue('2');
                                    }
                                    else {
                                        //TODO: error handling
                                        //https://mui.com/x/react-date-pickers/validation/
                                    }
                                }}>next</Button>
                                <Button disabled>back</Button>
                            </Stack>
                        </Stack>
                    </Paper>
                </TabPanel>

                <TabPanel value="2">
                    <Paper sx={{...formContainerStyle}}>
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
                    </Paper>
                </TabPanel>

                <TabPanel value="3">
                    <Paper sx={{...formContainerStyle}}>
                        <Stack direction="column" spacing={5}>
                            <Stack direction="column" spacing={3}>
                                <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                                    <Typography variant="h6">Candidate for X</Typography>
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


                                {/* TODO: check if a candidate is selected */}
                               {addCandidate &&
                                    <>
                                    <Stack direction='column' spacing={4} style={{borderTop:`1px solid ${colors["surface-variant"]}`, padding:'24px 0'}}>
                                        <FormTextField label="Name" />
                                        <FormTextField label="Title" />
                                        <FormTextField label="Bio" />
                                        {/* TODO: image upload */}
                                    </Stack>
                                    </>
                               }

                            </Stack>

                            <Button variant="contained" onClick={() => {setAddCandidate(true)}}>
                                {candidates.length > 1 ? "Add Another Candidate" : "Add Candidate"}
                            </Button>

                            <Stack direction="row-reverse">
                                <Button>next</Button>
                                <Button>back</Button>
                            </Stack>
                        </Stack>
                    </Paper>
                </TabPanel>

                <TabPanel value="4">
                    <Paper sx={{...formContainerStyle}}>
                        <Stack direction="column" spacing={5}>
                            <Stack direction="column" spacing={3}>
                                <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                                    <Typography variant="h6">Initiative</Typography>
                                    <Typography variant="body2" style={{paddingBottom:'4px'}}>{'(' + initiatives.length +' total)'}</Typography>
                                </Stack>

                                {addInitiative &&
                                    <>
                                    <FormTextField label="Initiative" />
                                    <FormTextField label="Response #1" />
                                    <FormTextField label="Response #2" />
                                    </>
                                }

                                <Button variant="contained" onClick={() => {setAddInitiative(true)}}>
                                    {initiatives.length > 1 ? "Add Another Initiative" : "Add Initiative"}
                                </Button>
                            </Stack>

                            <Stack direction="row-reverse">
                                <Button>done</Button>
                                <Button>back</Button>
                            </Stack>
                        </Stack>
                    </Paper>
                </TabPanel>
            </TabContext>
        </Stack>
    </Page>
  );
}