import React from "react"
import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { CssBaseline } from "@mui/material";
import Box from '@mui/material/Box';
import { DarkTheme, LightTheme } from "./Theme"
import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

export const RootWrapper = (props) => {
    let theme = false;
    if(isBrowser) {
        theme = localStorage.getItem("theme");
        if(theme === undefined) {
            theme = false;
        }
        else {
            theme = Boolean(parseInt(theme))
        }
    }

    const [dark, setDark] = useState(theme);
    const changeTheme = () => {
        const new_dark = !dark;
        setDark(new_dark);
        const val = new_dark ? "1" : "0";
        if(isBrowser) {
            localStorage.setItem("theme", val);
        }
    }

    return (
    <CssBaseline>
        <ThemeProvider theme={dark ? createTheme(DarkTheme) : createTheme(LightTheme)}>
            <SideBar/>
            <TopBar changeTheme={changeTheme} dark={dark}/>
            <BottomBar/>
            <Paper elevation={9} square sx={{pt:10, pl:6, pb:5,flexGrow:1, minHeight:"100vh"}}>
                <Box sx={{marginRight:"auto", marginLeft:"auto", maxWidth:"800px"}}>
                    {props.children}
                </Box>
            </Paper>
        </ThemeProvider>
    </CssBaseline>
    );
}