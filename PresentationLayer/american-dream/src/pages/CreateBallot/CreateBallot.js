import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Page from '../../components/Page';
import { Paper, Stack } from '@mui/material';
import { colors } from '../../utils/colors';
import "../../assets/css/styles.css";
import Description from './Description';
import Offices from './Offices';
import Candidates from './Candidates';
import Initiatives from './Initiatives';
import { useNavigate } from "react-router-dom";
import { ROLE } from '../../utils/role';
import axios from 'axios';

//TOOD: context functionality
// import CreateBallotContext from '../../utils/CreateBallotContext';
// const {description, setDescription} = React.useContext(CreateBallotContext);

const formContainerStyle = {
    padding: '40px 50px',
    borderRadius: '10px',
    backgroundColor: colors["purple"],
}

/*
offices: [
    {
        id: o1,
        name: role,
        choices, numVotes,
        candidates: [
            {
                id: c1,
                name: yanis,
                position: title,
                bio: bio
            }
        ]
    }
]
*/

export default function CreateBallot() {
    const navigate = useNavigate();
    let userRole = ROLE.administrator;

    // role must be admin
    React.useEffect(() => {
        console.log("whats my role? ", userRole);
        console.log("am i admin? ", userRole !== ROLE.administrator);
        if (userRole !== ROLE.administrator) {
            console.log("i'm not an admin");
            navigate("ballotList", { replace: true });
        }
    }, [userRole, navigate]);

    //TODO: transfer to context
    const [societies, setSocieties] = React.useState([
        {
            SocietyID:1,
            SocietyName: 'Clown Society',
            SocietyDesc: 'funny'
        },
        {
            SocietyID:2,
            SocietyName: 'Labor Union',
            SocietyDesc: 'passionate'
        },
        {
            SocietyID:3,
            SocietyName: 'Association for Computing Machinery',
            SocietyDesc: 'not funny'
        },
    ]);
    const [description, setDescription] = React.useState({});
    const [ballotOffices, setBallotOffices] = React.useState([]);
    const [ballotInitiatives, setBallotInitiatives] = React.useState([]);

    // React.useEffect(() => {
    //     axios.get('http://localhost:8080/societies')
    //     .then(response => {
    //         setSocieties(response);
    //     })
    //     .catch(error => {
            
    //         console.log('Error:', error);
    //     })
    // }, []);

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
                        <Description societyObjs={societies} description={description} setDescription={setDescription} setTaValue={setTabValue} />
                    </Paper>
                </TabPanel>

                <TabPanel value="2">
                    <Paper sx={{...formContainerStyle}}>
                        <Offices ballotOffices={ballotOffices} setBallotOffices={setBallotOffices} setTaValue={setTabValue} />
                    </Paper>
                </TabPanel>

                <TabPanel value="3">
                    <Paper sx={{...formContainerStyle}}>
                        <Candidates ballotOffices={ballotOffices} setBallotOffices={setBallotOffices} setTaValue={setTabValue} />
                    </Paper>
                </TabPanel>

                <TabPanel value="4">
                    <Paper sx={{...formContainerStyle}}>
                        <Initiatives societies={societies} description={description} ballotOffices={ballotOffices} ballotInitiatives={ballotInitiatives} setBallotInitiatives={setBallotInitiatives} setTabValue={setTabValue} />
                    </Paper>
                </TabPanel>
            </TabContext>
        </Stack>
    </Page>
  );
}