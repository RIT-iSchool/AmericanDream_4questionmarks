import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Page from '../components/Page';
import { Stack, TextField } from '@mui/material';
import { colors } from '../utils/colors';
import styled from "@emotion/styled";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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

export default function CreateBallot() {
  const [value, setValue] = React.useState('1');
  const [startDate, setStartDate] = React.useState(dayjs('2022-04-17'));
  const [endDate, setEndDate] = React.useState(dayjs('2022-04-17'));

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const ballotHeadings = ['Description','Officers','Candidates','Initiatives'];

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
                    <form>
                        <Stack direction="column" spacing={3}>
                            <Typography variant="h6" style={{...formHeadingStyle}}>Description</Typography>
                            <FormTextField label="Ballot Name" />
                        </Stack>
                        
                        <Stack direction="column" spacing={3}>
                            <Typography variant="h6" style={{...formHeadingStyle}}>Election Dates</Typography>
                            <Stack direction="row" justifyContent="space-between">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Controlled picker"
                                        value={startDate}
                                        onChange={(newStartDate) => setStartDate(newStartDate)}
                                    />

                                    <DatePicker
                                    label="Controlled picker"
                                    value={endDate}
                                    onChange={(newEndDate) => setValue(newEndDate)}
                                    />
                                </LocalizationProvider>
                            </Stack>
                        </Stack>
                    </form>
                </TabPanel>

                <TabPanel value="2">Item Two</TabPanel>

                <TabPanel value="3">Item Three</TabPanel>

                <TabPanel value="4">Item Four</TabPanel>
            </TabContext>
        </Stack>
    </Page>
  );
}