import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import SaveIcon from '@mui/icons-material/Save';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HomeIcon from '@mui/icons-material/Home';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useHistory } from "react-router-dom";

export const FlexPopper = ({open, anchorEl, text, placement}) => {
    return (
        <Popper 
            open={open} 
            anchorEl={anchorEl} 
            placement={placement}
            style={{zIndex: 2000}}>
            <Paper>
                <Typography sx={{px:2, py:1}}>{text}</Typography>
            </Paper>
        </Popper>
    )
}

const iconSize = 30;

const SideBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const onMouseOver = (text) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
        setText(text);
    }

    const onMouseLeave = () => {
        setAnchorEl(null);
        setOpen(false);
        setText("");
    }

    const history = useHistory();
    const onClick = (href) => {
        history.push(href);
    }

    return (
        <>
        <FlexPopper open={open} anchorEl={anchorEl} text={text} placement="right"/>
        <Drawer variant="permanent" anchor="left">
        <Stack spacing={2} sx={{mt:2, flexGrow: 1}}>
            <IconButton
                onClick = {() => onClick("/")}
                onMouseOver={onMouseOver("Home")}
                onMouseLeave={onMouseLeave}>
                <HomeIcon sx={{ fontSize: iconSize}}/>
            </IconButton>
            <IconButton 
                onClick = {() => onClick("/me")}
                onMouseOver={onMouseOver("About Me")}
                onMouseLeave={onMouseLeave}>
                <SaveIcon sx={{ fontSize: iconSize }}/>
            </IconButton>
            <IconButton 
                onClick = {() => onClick("/projects")}
                onMouseOver={onMouseOver("Projects")}
                onMouseLeave={onMouseLeave}>
                <ArchitectureIcon sx={{ fontSize: iconSize }}/>
            </IconButton>
        </Stack>
        <Stack sx={{mb:2}}>
            <IconButton 
                href="https://github.com/ChangMarkusYu"
                target="_blank"
                rel="noreferrer"
                onMouseOver={onMouseOver("GitHub")}
                onMouseLeave={onMouseLeave}>
                <GitHubIcon sx={{ fontSize: iconSize }}/>
            </IconButton>
            <IconButton 
                href="https://www.linkedin.com/in/chang-yu-0a2a73157/"
                target="_blank"
                rel="noreferrer"
                onMouseOver={onMouseOver("LinkedIn")}
                onMouseLeave={onMouseLeave}>
                <LinkedInIcon sx={{ fontSize: iconSize }}/>
            </IconButton>
            <IconButton 
                href="malto:marcus.yu.56@gmail.com"
                onMouseOver={onMouseOver("Email Me")}
                onMouseLeave={onMouseLeave}>
                <EmailIcon sx={{ fontSize: iconSize }}/>
            </IconButton>
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

const BottomBar = () => {
    return(
        <Footer>
            <Paper square sx={{pl:8}} elevation={4}>
                <Stack direction="row">
                    <Typography variant="caption" sx={{flexGrow: 1}}>
                        Made by Chang Yu
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{mr:5}}>
                        <Button 
                            href="https://reactjs.org/"
                            variation="text" 
                            sx={{py:0}} 
                            color="inherit">
                            <Typography variant="caption" sx={{mr:1}}>
                            React
                            </Typography>
                            <BottomLogo src="/React-icon.svg"/>
                        </Button>
                        <Button 
                            href="https://github.com/ChangMarkusYu"
                            variation="text" 
                            sx={{py:0}} 
                            color="inherit">
                            <Typography variant="caption" sx={{mr:1}}>
                            Github
                            </Typography>
                            <GitHubIcon fontSize="small"/>
                        </Button>
                        <Button 
                            href="https://www.netlify.com/"
                            variation="text" 
                            sx={{py:0}} 
                            color="inherit">
                            <Typography variant="caption" sx={{mr:1}}>
                            Netlify
                            </Typography>
                            <BottomLogo src="/netlify-icon.svg"/>
                        </Button>
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