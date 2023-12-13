import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { colors } from '../../utils/colors';
import styled from "@emotion/styled";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import "../../assets/css/styles.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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

const formHeadingStyle = {
    borderBottom:`1px solid ${colors["surface-variant"]}`, 
    color: colors["on-background"], 
    padding:'4px 0'
}

export default function Description({description,setDescription,setTabValue}) {
    //TODO: load societies list inside useEffect
    const societies = ['Clown Society', 'Labor Union', 'Association for Computing Machinery'];

    const [society,setSociety] = React.useState("");
    const [ballotName, setBallotName] = React.useState("");

    const today = dayjs();
    const [startDate, setStartDate] = React.useState(dayjs()); //dayjs.format() to make it a string
    const [endDate, setEndDate] = React.useState(dayjs()); //https://day.js.org/docs/en/display/format

    const handleSocietyChange = (event) => {
        setSociety(event.target.value);
    };

    const [errors, setErrors] = React.useState({
        society: false,
        ballotName: false,
    });

    return (
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
                            <MenuItem key={society} value={society}>{society}</MenuItem>
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

            <Button variant="contained" onClick={() => {
                    var format = "MMM D YYYY";

                    //data validation
                    if (society!=="" && ballotName!=="" && startDate.format(format)!=="" && endDate.format(format)!=="" && startDate <= endDate) {
                        //set description object
                        setDescription({
                            society: society,
                            ballotName: ballotName,
                            start: startDate,
                            end: endDate
                        });

                        console.log('description object set');
                        console.log(description);
                        
                        //go to description tab
                        // setTabValue('2');
                    }
                    else {
                        console.log('invalid form');
                        //TODO: error handling
                        //https://mui.com/x/react-date-pickers/validation/
                    }
                }}>
                Save
            </Button>

            {/* <Stack direction="row-reverse">
                <Button >done</Button>
                <Button disabled>back</Button>
            </Stack> */}
        </Stack>
    )
}