import React from "react"
import { CssBaseline } from "@mui/material";
import Paper from '@mui/material/Paper';
import { ThemeWrapper } from "./src/components/Theme";

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
    return (
        <CssBaseline>
            <ThemeWrapper>
                <Paper elevation={9} square sx={{pt:15, pl:6, pb:5,flexGrow:1, minHeight:"100vh"}}>
                    {element}
                </Paper>
            </ThemeWrapper>
        </CssBaseline>
    );
}