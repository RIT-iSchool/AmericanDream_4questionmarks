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

export default function Initiatives() {
    //Test data
    // var initiatives = [
    //     {
    //         initiativeId: 1,
    //         description: "initiative description 1",
    //         abstrain: true,
    //         ballotId: 1,
    //     },
    //     {
    //         initiativeId: 2,
    //         description: "initiative description 2",
    //         abstrain: true,
    //         ballotId: 2,
    //     },
    // ];

    
    const [initiative, setInitiative] = React.useState('');
    const [initiatives, setInitiatives] = React.useState([]);
    const [addInitiative, setAddInitiative] = React.useState(false);

    const [errors, setErrors] = React.useState({
    });

    return (
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
    )
}