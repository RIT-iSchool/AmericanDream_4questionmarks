import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import App from "./pages/App";
import Login from "./pages/login/login";
import BallotList from "./pages/BallotList";
import Societies from "./pages/Societies";

const root = ReactDOM.createRoot(document.getElementById("root"));

// all the pages you can navigate to
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
      path: "/ballotList",
      element: <BallotList />
    },
    {
      path: "/societies",
      element: <Societies />
    }
]);

// Creates the theme for MUI
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#FABC49" },
        secondary: { main: "#DBC3A1" },
        error: { main: "#fa6959" },
        text: {
            primary: "#EAE1D9",
            secondary: "#422C00",
        },
    },
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
