import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { colors } from '../../utils/colors';
import styled from "@emotion/styled";
import "../../assets/css/styles.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


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

export default function Initiatives({societies, description, ballotOffices, ballotInitiatives = [], setBallotInitiatives, setTabValue}) {
    const navigate = useNavigate();
    

    const [addInitiative, setAddInitiative] = React.useState(false);

    const [initiative, setInitiative] = React.useState('');
    const handleInitiativeChange = (event) => {
        setInitiative(event.target.value)
    }

    const [response1, setResponse1] = React.useState('');
    const handleResponse1Change = (event) => {
        setResponse1(event.target.value)
    }

    const [response2, setResponse2] = React.useState('');
    const handleResponse2Change = (event) => {
        setResponse2(event.target.value)
    }

    const [errors, setErrors] = React.useState({
        initiative: false,
        response1: false,
        response2: false,
    });

    return (
        <Stack direction="column" spacing={5}>
            <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={1} alignItems="flex-end" style={{...formHeadingStyle}}>
                    <Typography variant="h6">Initiative</Typography>
                    <Typography variant="body2" style={{paddingBottom:'4px'}}>{'(' + ballotInitiatives.length +' total)'}</Typography>
                </Stack>

                {ballotInitiatives.length === 0 && !addInitiative &&
                    <Button variant="outlined" onClick={() => {
                        setAddInitiative(true)
                        console.log('ballotInitiatives:');
                        console.log(ballotInitiatives);
                    }}> Add an initiative</Button>
                }

                {addInitiative &&
                <>
                    <FormTextField label="Initiative" onChange={handleInitiativeChange} error={errors.initiative} />
                    <FormTextField label="Response #1" onChange={handleResponse1Change} error={errors.response1} />
                    <FormTextField label="Response #2" onChange={handleResponse2Change} error={errors.response2} />

                    {/* TODO: refactor addition into one reusable function */}
                    {/* <Button variant="outlined" onClick={() => {
                        //data validation
                        if(initiative!=="" && response1!=="" && response2!=="") {
                            console.log(`initiative: ${initiative}, response: ${response1}, response2: ${response2}`);

                            //make temp initiative obj
                            var temp  = {
                                description: initiative,
                                //TOOD: abstain - default to true for now
                                response1: response1,
                                response2: response2
                            }

                            //add to iniatiatives array
                            setBallotInitiatives([
                                ...ballotInitiatives,
                                temp
                            ]);

                            console.log('added initiative to ballotInitiatives array');

                            //reset and clear current inputs
                            setInitiative("");
                            setResponse1("");
                            setResponse2("");
                        } else {
                            console.log('invalid form');
                            //TODO: error handling and styling
                        }
                    }}>
                        Add Another Initiative
                    </Button> */}

                    <Button variant="contained" onClick={() => {
                        //data validation
                        if(initiative!=="" && response1!=="" && response2!=="") {
                            console.log(`initiative: ${initiative}, response: ${response1}, response2: ${response2}`);

                            //make temp initiative obj
                            var temp  = {
                                description: initiative,
                                //TOOD: abstain - default to true for now
                                response1: response1,
                                response2: response2
                            }

                            //add to iniatiatives array
                            setBallotInitiatives([
                                ...ballotInitiatives,
                                temp
                            ]);

                            console.log('added initiative to ballotInitiatives array');

                            //get societyId
                            var societyId;
                            societies.forEach(soc => {
                                if (soc.SocietyName == description.society) {
                                    console.log(`society ${description.society} found in societies array`);
                                    societyId = soc.SocietyID;
                                } else {
                                    console.log(`society ${description.society} not found in societies array`);
                                    societyId = -1;
                                }
                            });

                            //create the ballot to insert into db
                            var newBallot = {
                                ElectionStart: description.start.format("YYYY MM DD"),
                                ElectionEnd: description.end.format("YYYY MM DD"),
                                Offices: {offices: ballotOffices},
                                SocietyID: societyId,
                            };

                            console.log('ballot to be inserted into database');
                            console.log(newBallot);

                            //create ballot via backend
                            var ballotIdCreated;
                            axios.post('http://localhost:8080/ballots', newBallot)
                                .then(response => {
                                    console.log('Success:', response.data);
                                    ballotIdCreated = response.data.BallotID;
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });

                            //create ballot_initiative and insert into db
                            //TODO: validation that ballot exists
                            //TODO: handle multiple initiatives
                            var initiativeIdCreated;
                            var newBallotInitiative = {
                                Description: initiative,
                                Abstain: true, //TODO: later, set as true for now
                                BallotID: ballotIdCreated
                            };
                            axios.post('http://localhost:8080/ballotInitiatives', newBallotInitiative)
                                .then(response => {
                                    console.log('Success:', response.data);
                                    initiativeIdCreated = response.data.InitiativeID;
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });

                            //create ballot_opinion and insert into db
                            //TODO: validation that ballot exists
                            var newBallotOption = {
                                Description: response1,
                                InitiativeID: initiativeIdCreated
                            };
                            axios.post('http://localhost:8080/ballotOptions', newBallotOption)
                                .then(response => {
                                    console.log('Success:', response.data);
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });

                            //do twice since there are two responses
                            var newBallotOption = {
                                Description: response2,
                                InitiativeID: initiativeIdCreated
                            };
                            axios.post('', newBallotOption)
                                .then(response => {
                                    console.log('Success:', response.data);
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });
                            
                            //done, redirect to ballot list
                            navigate("/", {replace:true});
                        } 
                        else {
                            console.log('invalid form');
                            //TODO: error handling and styling
                        }
                    }}>
                        Save
                    </Button>
                </>
                }
            </Stack>

            {/* <Stack direction="row-reverse">
                <Button>done</Button>
                <Button>back</Button>
            </Stack> */}
        </Stack>
    )
}