import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ROLE } from "../utils/role.js";
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Page from "../components/Page.js";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

var role = ROLE.employee;
var societies = [
    {
        title: "Clown Society",
        link: "/",
    }, 
    {
        title: "Labor Union",
        link: "/",
    }, 
    {
        title: "Association for Computing Machinery",
        link: "/",
    }, 
];

// TODO: add to MUI theme  
const constStyles = {
    primary:'#FABC49',
    surface3: '#302d38',
    onsurface: '#CDC5BD',
    onprimarycontainer: '#CDC5BD',
    primarycontainer: '#5F4100',
    borderRadius: '28px',
}

const resultsStyles={
    backgroundColor: constStyles.surface3,
    color: constStyles.onprimarycontainer,
    borderRadius: constStyles.borderRadius,
    padding: '1em',
}

const SearchTextField = styled(TextField)({
    '& .MuiFormLabel-root': {
        color:constStyles.onprimarycontainer,
    },
    '& label.Mui-focused': {
        color:constStyles.onprimarycontainer,
    },
    '& .MuiFilledInput-root': {
        borderRadius: constStyles.borderRadius,
    },
    backgroundColor: constStyles.surface3,
    borderRadius: constStyles.borderRadius,
});

const handleSearchChange = (e) => {
    console.log('search change triggered');
}

export default function Societies() {
    // TODO: get societies from DB
    // useEffect();

    //tabs
    const [value,setValue] = useState('1');
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Page title="Societies">
           <Stack direction="column" spacing={4}>
                <TabContext value={value} variant="fullWidth">
                    <Box>
                        <TabList onChange={handleTabChange} centered>
                            <Tab label="Societies" value="1"  />
                            <Tab label="Create Ballot" value="2" />
                            <Tab label="Edit Ballot" value="3" />
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <Stack direction="column" spacing={4}>
                        <SearchTextField variant="filled" label="search" InputProps={{
                            disableUnderline:true,
                            endAdornment: (
                                <InputAdornment position="end" sx={{color: constStyles.onprimarycontainer}}>
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => handleSearchChange(e)} />

                        <Stack direction="column" spacing={4} sx={{...resultsStyles}}>
                            {societies.map((society)=> {
                                return (
                                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',gap:'16px'}}>
                                        <div style={{backgroundColor:constStyles.primarycontainer, color:constStyles.onprimarycontainer, padding:'8px 12px', borderRadius:'50%'}}>{society.title.substring(0,1)}</div>
                                        
                                        <Link to={society.link}  style={{ textDecoration: 'none' }}>
                                            <Typography variant="body1" sx={{
                                                    color:constStyles.onprimarycontainer,
                                                    textDecoration: 'none',
                                                    '&:hover': {
                                                        color: constStyles.primary,
                                                    }
                                                }}>
                                                {society.title}
                                            </Typography>
                                        </Link>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Stack>
                    </TabPanel>

                    
                    <TabPanel value="2">
                        <p>create a ballot</p>
                    </TabPanel>

                    <TabPanel value="3">
                        <p>edit ballot</p>
                    </TabPanel>
                </TabContext>
           </Stack>
        </Page> 
    );
}