import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";

import { ROLE } from "../utils/role.js";
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Page from "../components/Page.js";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from 'axios';
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

export default function Societies() {
    const [societies, setSocieties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const [value,setValue] = useState('1');
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    
    useEffect(() => {
        axios.get('http://localhost:8080/societies')
            .then(response => {
                setSocieties(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the societies', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value) {
            axios.get(`http://localhost:8080/societies/search?searchTerm=${e.target.value}`)
                .then(response => {
                    setSocieties(response.data);
                })
                .catch(error => {
                    console.error('There was an error searching the societies', error);
                });
        } else {
            axios.get('http://localhost:8080/societies')
                .then(response => {
                    setSocieties(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the societies', error);
                });
        }
    };
    
    return (
        
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
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end" sx={{color: constStyles.onprimarycontainer}}>
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(e) => handleSearchChange(e)} />
                    
                            <Stack direction="column" spacing={4} sx={{...resultsStyles}}>
                                {societies.map((society) => {
                                    return (
                                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px'}}>
                                            <div style={{
                                                backgroundColor: constStyles.primarycontainer, 
                                                color: constStyles.onprimarycontainer, 
                                                padding: '8px 12px', 
                                                borderRadius: '50%'
                                            }}>
                                                {society.societyName}
                                            </div>
                                            
                                            <Link to={`/societies/${society.societyID}`} style={{ textDecoration: 'none' }}>
                                                <Typography variant="body1" sx={{
                                                        color: constStyles.onprimarycontainer,
                                                        textDecoration: 'none',
                                                        '&:hover': {
                                                            color: constStyles.primary,
                                                        }
                                                    }}>
                                                    {society.societyName}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: constStyles.onprimarycontainer }}>
                                                    {society.societyDesc}
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
    );
}