import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Creates the theme for MUI
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {main: '#FABC49'},
    secondary:  {main: '#DBC3A1'},
    error:  {main: '#FFB4AB'},
    text: {
      primary: '#EAE1D9',
      secondary: '#422C00',
    }
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
