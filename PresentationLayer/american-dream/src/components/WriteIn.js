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
import { validate } from "../utils/utils.js";

function WriteIn({ selected, setSelected, vote, officeId }) {

    const [text, setText] = React.useState("");

    return (
        <div
            className={
                selected === 0 ? "write-in-box selected-box" : "write-in-box"
            }
        >
            <div className="textfield">
                <TextField
                    className="textfield"
                    label="Write In"
                    type="text"
                    InputLabelProps={{ style: { color: "#DBC3A1" } }}
                    onChange={(event) => {
                        setText(event.target.value)
                    }}
                />
                <div className="button-box-candidate">
                    <br />
                    <br />
                    <Button variant="contained" onClick={() => {

                        if (validate(text, 1, 100)) {
                            let newSelected = selected;
                            newSelected[officeId] = 0;
                            setSelected(newSelected);
                            console.log(selected);
                            vote(officeId, text);
                        }
                        
                    }}>
                        {selected === 0 ? "Voted!" : "Vote"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WriteIn;
