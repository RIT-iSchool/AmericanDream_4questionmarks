import "../assets/css/setup.css";
import "../assets/css/variables.css";
import "../assets/css/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Typography from "@mui/material/Typography";
import { colors } from "../utils/colors.js";
import { shortNumString } from "../utils/utils.js";

export default function StatBox({ stat }) {
    return (
            <div className={"stat-box"}>
                <Typography variant="h4" color={colors["primary"]}>
                    {shortNumString(stat.num)}{stat.unit}
                </Typography>
                <Typography variant="body" color={colors["on-surface"]}>
                    {stat.name}
                </Typography>
            </div>
    );
}
