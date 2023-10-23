import './login.css';
import logo from '../assets/logo.png';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        // mode: 'dark',
        primary: '#FABC49',
    }
});

export default function Login() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth="sm" className='loginContainer'>
                <Stack spacing={2} direction="column">
                    <Container className='headingContainer'>
                        <div className='logoContainer'>
                            <img src={logo} className="logo" alt="4 question marks logo" />
                        </div>
                        
                        <p className="heading">welcome back</p>
                    </Container>
                    
                    <TextField id="outlined-required" label="Email" type="email" />
                    <TextField id="outlined-required" label="Password" type="password" />

                    <Button variant="contained">Log In</Button>
                    <Button variant="outlined">Create an Account</Button>
                </Stack>
            </Container>
        </ThemeProvider>
    )
}