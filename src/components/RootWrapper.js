import React from "react"
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { CssBaseline } from "@mui/material";
import Box from '@mui/material/Box';
import { DarkTheme, LightTheme } from "./Theme"
import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const RootWrapper = (props) => {
    const [dark, setDark] = useState(false); // default to light theme
    if(typeof window !== 'undefined') {
        const item = localStorage.getItem("theme");
        if(item !== undefined) {
            setDark(Boolean(parseInt(item)));
        }
    }

    const changeTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        typeof window !== 'undefined' 
            && window.localStorage.setItem("theme", newDark ? "1" : "0");
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