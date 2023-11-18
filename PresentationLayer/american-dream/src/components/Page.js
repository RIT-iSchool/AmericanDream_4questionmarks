import { Box, Stack } from "@mui/material";
import CustomAppBar from "../components/CustomAppBar.js";

export default function Page({title, children}) {
    return (
        <Stack direction="column" spacing={4} sx={{width:'100vw'}}>
            {/* TODO: render navigation items based on role */}
            <CustomAppBar pageName={title} />

            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
                <Box sx={{minWidth:'50%', margin:'0 auto'}}>
                    {children}
                </Box>
            </Box>

        </Stack> 
    );
}