import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import { ROLE } from "../utils/role.js";
import { useNavigate } from "react-router-dom";
import StatBox from "../components/StatBox.jsx";

export default function Statistics() {
    const role = ROLE.administrator; // from db
    const navigate = useNavigate();

    // from db
    const stats = [
        {
            name: "Active Ballots",
            num: 2,
            unit: "",
        },
        {
            name: "Inactive Ballots",
            num: 3,
            unit: "",
        },
        {
            name: "Active Users",
            num: 5210,
            unit: "",
        },
        {
            name: "Active Elections",
            num: 439,
            unit: "",
        },
        {
            name: "Members",
            num: 412,
            unit: "",
        },
        {
            name: "Avg Participating Members",
            num: 289,
            unit: "",
        },
        {
            name: "Avg Query Response Time",
            num: 0.1,
            unit: "ms",
        },
        {
            name: "Avg HTTP Request Time",
            num: 0.21341,
            unit: "ms",
        },
    ];

    // role must be admin
    React.useEffect(() => {
        if (role !== ROLE.administrator) {
            navigate("ballotList", { replace: true });
        }
    }, [role, navigate]);

    return (
            <div className="stat-box-wrapper">
                {stats.map((stat, index) => {
                    return <StatBox key={index} stat={stat} />;
                })}
            </div>
    
    );
}
