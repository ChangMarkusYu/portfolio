import React from "react";
import { IconButtonWithPopper } from "./IconButtonWithPopper";
import { Link } from "gatsby";
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

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

export const SideBar = () => {
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