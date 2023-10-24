import './login.css';
import logo from '../../assets/logo.png';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    const [isNewUser, setIsNewUser] = useState(true);

    return (
        <Container maxWidth="sm" className='loginContainer'>
            <Stack spacing={10} direction="column" sx={{textAlign: 'center'}}>
                <div className='logoContainer'>
                    <img src={logo} className="logo" alt="4 question marks logo" />
                </div>
                
                <Stack direction={'column'} spacing={4}>
                    <Typography variant='h2' sx={{color: '#FABC49'}}>
                        {isNewUser ? "Welcome!" : "Welcome Back!"}
                    </Typography>
                    
                    <Stack direction={'column'} spacing={2}>
                        <TextField id="outlined-required" label="Email" type="email" InputLabelProps={{style: {color: '#DBC3A1'}}} />
                        <TextField id="outlined-required" label="Password" type="password" InputLabelProps={{style: {color: '#DBC3A1'}}} />
                    </Stack>

                    <Stack direction={'column'} spacing={2}>
                        <Button variant="contained">
                            <Typography variant='h7'>
                                log in
                            </Typography>
                        </Button>
                        <Link to={'/'}>
                            <Typography variant='h7' sx={{color: '#FABC49'}}>
                                Create An Account
                            </Typography>
                        </Link>
                        {/* <Button variant="outlined">
                            <Typography variant='h7'>
                                create an account
                            </Typography>
                        </Button> */}
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}