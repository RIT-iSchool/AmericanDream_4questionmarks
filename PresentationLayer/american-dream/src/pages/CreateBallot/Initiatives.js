import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { colors } from '../../utils/colors';
import styled from "@emotion/styled";
import "../../assets/css/styles.css";
import { useEffect } from 'react';

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

export default function Initiatives({ballotInitiatives, setBallotInitiatives, setTabValue}) {
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
                    <Button variant="outlined" onClick={() => {
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
                        } else {
                            console.log('invalid form');
                            //TODO: error handling and styling
                        }
                    }}>
                        Add Another Initiative
                    </Button>

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

                            //create ballot done
                            //redirect to ballot list
                        } else {
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