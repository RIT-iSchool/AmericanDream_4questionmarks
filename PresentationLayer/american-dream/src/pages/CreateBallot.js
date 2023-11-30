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

export default function CreateBallot() {
  const [value, setValue] = React.useState('1');
  const [startDate, setStartDate] = React.useState(dayjs('2022-04-17'));
  const [endDate, setEndDate] = React.useState(dayjs('2022-04-17'));

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const ballotHeadings = ['Description','Officers','Candidates','Initiatives'];

  const formContainerStyle = {
    padding: '40px 50px',
    borderRadius: '10px',
    backgroundColor: colors["purple"]
  }

  return (
    <Page title="Create Ballot">
        <Stack direction="column" spacing={4}>
            <TabContext value={value} variant="fullWidth">
                <Box>
                <TabList onChange={handleTabChange} centered>
                    <Tab label={ballotHeadings[0]} value="1" />
                    <Tab label={ballotHeadings[1]} value="2" />
                    <Tab label={ballotHeadings[2]} value="3" />
                    <Tab label={ballotHeadings[3]} value="4" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Paper sx={{...formContainerStyle}}>
                        <form> 
                        <Stack direction="column" spacing={5}>

                                <Stack direction="column" spacing={3}>
                                    <Typography variant="h6" style={{...formHeadingStyle}}>Description</Typography>
                                    <FormTextField label="Ballot Name" />
                                </Stack>
                                
                                <Stack direction="column" spacing={3}>
                                    <Typography variant="h6" style={{...formHeadingStyle}}>Election Dates</Typography>
                                    <Stack direction="row" spacing={2} justifyContent="space-between">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePickerField
                                                sx={{width:'48%'}}
                                                label="Start Date"
                                                value={startDate}
                                                onChange={(newStartDate) => setStartDate(newStartDate)}
                                            />

                                            <DatePickerField
                                                sx={{width:'48%'}}
                                                label="End Date"
                                                value={endDate}
                                                onChange={(newEndDate) => setValue(newEndDate)}
                                            />
                                        </LocalizationProvider>
                                    </Stack>
                                </Stack>

                                <Stack direction="column" spacing={3}>
                                    <Typography variant="h6" style={{...formHeadingStyle}}>Offier Elections and Initiatives</Typography>
                                    <FormTextField label="Number of Officers" />
                                    <Stack direction="row" spacing={2} justifyContent="space-between">
                                        <FormTextField label="Number of Initiatives" sx={{width:'48%'}} />
                                        <FormTextField label="Number of Responses" sx={{width:'48%'}} />
                                    </Stack>
                                </Stack>

                                <Stack direction="row-reverse">
                                    <Button>next</Button>
                                    <Button disabled>back</Button>
                                </Stack>
                        </Stack>
                        </form>
                    </Paper>
                </TabPanel>

                <TabPanel value="2">Item Two</TabPanel>

                <TabPanel value="3">Item Three</TabPanel>

                <TabPanel value="4">Item Four</TabPanel>
            </TabContext>
        </Stack>
    </Page>
  );
}