import React from "react"
import { useState } from "react";
import { UIFrame } from "./UIFrame";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

const DarkTheme = {
    palette: {
        mode: 'dark',
    },
    typography: {
        button: {
          textTransform: "none"
        },
    },
}

const LightTheme = {
    palette: {
        mode: 'light',
    },
    typography: {
        button: {
          textTransform: "none"
        },
    },
};

export const ThemeWrapper = (props) => {
    const [dark, setDark] = useState(true);
    const changeTheme = () => {
        setDark(!dark);
    }

    return (
        <ThemeProvider theme={dark ? createTheme(DarkTheme) : createTheme(LightTheme)}>
            <UIFrame changeTheme={changeTheme} dark={dark}/>
            {props.children}
        </ThemeProvider>
    );
}
  