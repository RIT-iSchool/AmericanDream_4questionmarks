import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function WriteIn({ selected }) {
    return (
        <div
            className={selected ? "write-in-box selected-box" : "write-in-box"}
        >
            <div className="textfield">
                <TextField
                    className="textfield"
                    label="Write In"
                    type="text"
                    InputLabelProps={{ style: { color: "#DBC3A1" } }}
                />
                <div className="button-box-candidate">
                    <br />
                    <br />
                    <Button variant="contained">
                        {selected ? "Voted!" : "Vote"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WriteIn;
