import '../assets/css/setup.css';
import '../assets/css/variables.css';
import '../assets/css/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { colors } from '../utils/colors.js';
import { Link } from "react-router-dom";


function Idk() {
  return (
    <div>
      <Typography variant="h1" color={colors['on-surface']}>
        Idk
      </Typography>
      <Link to={'/'}><Button variant="contained">Go to app</Button></Link>

    </div>
  );
}

export default Idk;
