import React from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CodeIcon from '@mui/icons-material/Code';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { styled } from "@mui/system";

const Header = styled('div')({
    position: "fixed",
    top: 0,
    flexGrow:1,
    width: "100%",
    zIndex: 1000,
});

export const TopBar = ({changeTheme, dark}) => {
    const onClick = () => {
        changeTheme();
    }

    return (
        <Header>
        <Paper elevation={1} sx={{pl: 8, py:1}} square>
            <Stack direction="row">
                <Stack direction="row" spacing={2} sx={{flexGrow: 1}}>
                    <CodeIcon/>
                    <Typography variant="body1">
                        Never Stop Thinking.
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{mr:2}}>
                    <Button variant="text" color="inherit" sx={{py:0}} onClick={onClick}>
                    {dark ? 
                    <>
                        <Typography variant="body1" sx={{mr:1}}>
                            Dark
                        </Typography>
                        <NightsStayIcon/>
                    </>
                    :
                    <>
                        <Typography variant="body1" sx={{mr:1}}>
                            Light
                        </Typography>
                        <Brightness4Icon/>
                    </>
                    }
                    </Button>
                </Stack>
            </Stack>
        </Paper>
        </Header>
    )
}