import React from "react"
import { useState } from "react";
import { UIFrame } from "./src/components/UIFrame";
import { CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./src/components/Theme";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
    const [dark, setDark] = useState(true);
    const changeTheme = () => {
        setDark(!dark);
    }

    return (
        <CssBaseline>
            <ThemeProvider theme={dark ? createTheme(DarkTheme) : createTheme(LightTheme)}>
            <UIFrame changeTheme={changeTheme} dark={dark}/>
                <Paper elevation={9} square sx={{pt:15, pl:6, pb:5,flexGrow:1, minHeight:"100vh"}}>
                    {element}
                </Paper>
            </ThemeProvider>
        </CssBaseline>
    );
}