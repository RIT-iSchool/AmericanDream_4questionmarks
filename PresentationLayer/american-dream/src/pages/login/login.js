import './login.css';
import logo from '../../assets/logo.png';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

export default function Login() {
    // TODO: session 
    const [isNewUser, setIsNewUser] = useState(true);
    const [user,setUser] = useState({
        userEmail: "",
        userPassword: "",
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async (event) => {
    event.preventDefault();
    setEmailErr(false);
    setPasswordErr(false);

    if (email === '') {
        setEmailErr(true);
    }
    if (password.length < 8) {
        setPasswordErr(true);
        setErrorMsg('Invalid password');
        return; // Stop the function if validation fails
    }

    if (!emailErr && !passwordErr) {
        const loginData = {
            email: email,
            password: password
        };

        try {
            const response = await Axios.post('http://localhost:8080/login', loginData);
            const userData = response.data;
            console.log('User data:', userData);
             if (userData.roleID === 1) {
                    navigate('/vote');
                } else if (userData.roleID === 2) {
                    navigate('/ballotList');
                } else if (userData.roleID === 3) {
                    navigate('/createBallot');
                } else if (userData.roleID === 4) {
                    navigate('/createSociety');
                } else {
                    //nothing
                }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMsg('Login failed. Please check your credentials.');
        }
    }
};


    return (
        <Container maxWidth="sm" className='loginContainer'>
            <Stack spacing={10} direction="column" sx={{textAlign: 'center'}}>
                <div className='logoContainer'>
                    <img src={logo} className="logo" alt="4 question marks logo" />
                </div>
                
                <form onSubmit={handleLogin}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction='column' spacing={0}>
                            <Typography variant='h2' color="primary">{isNewUser ? "Welcome!" : "Welcome Back!"}</Typography>
                            <Typography variant="subtitle1" color="error" sx={{height: '24px'}}>{errorMsg}</Typography>
                        </Stack>
                        
                        <Stack direction={'column'} spacing={2}>
                            <TextField id="outlined-required" label="Email" type="email" InputLabelProps={{style: {color: '#DBC3A1'}}} onChange={e => setEmail(e.target.value)} required value={email} error={emailErr} />

                            <TextField id="outlined-required" label="Password" type="password" InputLabelProps={{style: {color: '#DBC3A1'}}} onChange={e => setPassword(e.target.value)} required value={password} error={passwordErr} />
                        </Stack>

                        <Stack direction={'column'} spacing={2}>
                            <Button variant="contained" type="submit">
                                <Typography variant='h7'>
                                    log in
                                </Typography>
                            </Button>
                            <Link to={'/'}>
                                <Typography variant='h7' sx={{color: '#FABC49'}}>
                                    Create An Account
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </form>
            </Stack>
        </Container>
    )
}
