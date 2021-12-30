import React from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from "@mui/system";
import Button from '@mui/material/Button';

const Footer = styled('div')({
    position: "fixed",
    bottom: 0,
    flexGrow:1,
    width: "100%",
    zIndex:1000
});

const BottomLogo = styled('img')({
    width: 20,
    height: 20,
});

const BottomBarIconButton = ({href, iconSrc, IconComponent, children}) => {
    return (
        <Button 
            href={href}
            target="_blank"
            rel="noreferrer"
            variation="text" 
            sx={{py:0}} 
            color="inherit">
            <Typography variant="caption" sx={{mr:1}}>
            {children}
            </Typography>
            {iconSrc ? <IconComponent src={iconSrc}/> : <IconComponent/>}
        </Button>
    )
}

export const BottomBar = () => {
    const GitHubIconSmall = () => <GitHubIcon fontSize="small"/>;

    return(
        <Footer>
            <Paper square sx={{pl:8}} elevation={4}>
                <Stack direction="row">
                    <Typography variant="caption" sx={{flexGrow: 1}}>
                        Made by Chang Yu
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{mr:5}}>
                        <BottomBarIconButton 
                            href="https://reactjs.org/" 
                            IconComponent={BottomLogo}
                            iconSrc="/React-icon.svg">
                            React
                        </BottomBarIconButton>
                        <BottomBarIconButton 
                            href="https://github.com/ChangMarkusYu" 
                            IconComponent={GitHubIconSmall}>
                            GitHub
                        </BottomBarIconButton>
                        <BottomBarIconButton 
                            href="https://www.netlify.com/" 
                            IconComponent={BottomLogo}
                            iconSrc="/Netlify-icon.svg">
                            Netlify
                        </BottomBarIconButton>
                    </Stack>
                </Stack>
            </Paper>
        </Footer>
    )
}