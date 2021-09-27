import React from "react";
import Drawer from '@mui/material/Drawer';
import SaveIcon from '@mui/icons-material/Save';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButtonWithPopper } from "./UIElements";
import { Link } from "react-router-dom";

const iconSize = 30;

// High order component trick
const MakeSmallIcon = (IconComponent) => {
    return () => <IconComponent sx={{ fontSize: iconSize}}/>
}

const SideBarIconButton = ({popperText, IconComponent, to, href}) => {
    return (
        <>
        {to ? 
            <Link to={to}>
                <IconButtonWithPopper
                    popperText={popperText}
                    IconComponent={MakeSmallIcon(IconComponent)}
                    placement="right"/>
            </Link> 
        : 
            <IconButtonWithPopper
                href={href}
                popperText={popperText}
                IconComponent={MakeSmallIcon(IconComponent)}
                placement="right"/>
        }
        </>
    )
}

const SideBar = () => {
    return (
        <>
        <Drawer variant="permanent" anchor="left">
        <Stack spacing={2} sx={{mt:2, flexGrow: 1}}>
            <SideBarIconButton 
                popperText="Home" 
                IconComponent={HomeIcon} 
                to="/"/>
            <SideBarIconButton 
                popperText="About me" 
                IconComponent={SaveIcon} 
                to="/me"/>
            <SideBarIconButton 
                popperText="Projects" 
                IconComponent={ArchitectureIcon} 
                to="/projects"/>
        </Stack>
        <Stack sx={{mb:1}}>
            <SideBarIconButton 
                popperText="GitHub" 
                IconComponent={GitHubIcon} 
                href="https://github.com/ChangMarkusYu"/>
            <SideBarIconButton 
                popperText="LinkedIn" 
                IconComponent={LinkedInIcon} 
                href="https://www.linkedin.com/in/chang-yu-0a2a73157/"/>
            <SideBarIconButton 
                popperText="Email me" 
                IconComponent={EmailIcon} 
                href="malto:marcus.yu.56@gmail.com"/>
        </Stack>
        </Drawer>
        </>
    )
}

const Header = styled('div')({
    position: "fixed",
    top: 0,
    flexGrow:1,
    width: "100%",
    zIndex: 1000,
});

const TopBar = ({changeTheme, dark}) => {
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

const BottomBar = () => {
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

export const UIFrame = ({changeTheme, dark}) => {
    return (
        <>
            <SideBar/>
            <TopBar changeTheme={changeTheme} dark={dark}/>
            <BottomBar/>
        </>
    )
}