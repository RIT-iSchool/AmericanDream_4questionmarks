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
import Description from './Description';
import Offices from './Offices';
import Candidates from './Candidates';
import Initiatives from './Initiatives';

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

export default function CreateBallot() {
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
                        <Description />
                    </Paper>
                </TabPanel>

                <TabPanel value="2">
                    <Paper sx={{...formContainerStyle}}>
                        <Offices />
                    </Paper>
                </TabPanel>

                <TabPanel value="3">
                    <Paper sx={{...formContainerStyle}}>
                        <Candidates />
                    </Paper>
                </TabPanel>

                <TabPanel value="4">
                    <Paper sx={{...formContainerStyle}}>
                        <Initiatives />
                    </Paper>
                </TabPanel>
            </TabContext>
        </Stack>
    </Page>
  );
}