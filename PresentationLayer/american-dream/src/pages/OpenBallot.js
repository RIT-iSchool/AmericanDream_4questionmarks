import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import CustomAppBar from "../components/CustomAppBar.js";
import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import { sampleBallot } from "../utils/sampleBallot.js";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CandidateBox from "../components/CandidateBox";




// TODO: will take in a ballot
function OpenBallot() {

    let ballot = sampleBallot;
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomAppBar pageName={ballot.title} />
            <section>
            <Typography variant="body" color={colors["on-surface"]}>
                {ballot.startdate} - {ballot.enddate}
            </Typography>
            <br />
            <br />

            {/* Ballot Content */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="ballot sections" 
                centered
                variant="scrollable"
                scrollButtons="auto"
            >
                {
                    /* Candidate Positions */
                    ballot.candidatePositions.map(
                        ( position, index ) => ( 
                            <Tab label={position.title} {...a11yProps(index)} />
                    ) )
                }
                {
                    /* Initiatives */
                    ballot.initiatives.map(
                        ( initiative, index ) => ( 
                            <Tab label={`Initiative ${index + 1}`} {...a11yProps(index)} />
                    ) )
                }
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                <Tab label="Item Eight" {...a11yProps(7)} />
                <Tab label="Item Nine" {...a11yProps(8)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <CandidateBox candidate={ballot.candidatePositions[0].candidates[0]} selected={true}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            Item Three
            </CustomTabPanel>

            </section>
        </div>
    );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

export default OpenBallot;
