import React from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import WorkplacePhoto from '../assets/workplace.jpg'

const MePhoto = styled('img')({
    width: "80%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
});

const AboutMe = () => {
    return(
        <>
        <Typography variant="h4" align="center" sx={{mb: 1}}>
            <b>About me</b>
        </Typography>
        <Typography variant="h6" align="center" sx={{mb: 5}}>
            Student, Developer, Average Linux Fan
        </Typography>
        <Typography variant="body1" align="justify" sx={{mb:4}}>
        I am a graduate student of the MSCS program of Georgia Institute of Technology. 
        I am interested in web development, software engineering, and operating systems.
        I am currently looking for internship opportunities in Summer 2022.
        </Typography>
        <Typography variant="h5" align="left" sx={{my:2}}>
        <b>My skills</b>
        </Typography>
        <ul>
            <Stack direction="column" spacing={1}>
                <Typography variant="body1" align="left" sx={{mb:4}}>
                    <li>C/C++, Python, JavaScript, Java, MATLAB, x86 Assembly, HTML, CSS</li>
                    <li>React, Express, Django, MongoDB, SQL</li>
                    <li>Docker, AWS, Git, Linux</li>
                </Typography>
            </Stack>
        </ul>
        <Typography variant="h5" align="left" sx={{my:2}}>
        <b>Publications</b>
        </Typography>
        <ul>
            <Typography variant="subtitle2" align="left" sx={{mb:4}}>
            <li><b>Chang Yu</b>, Yue Liu, Leon Y. Cai, Cailey I. Kerley, Kaiwen Xu, 
                Warren D. Taylor, Hakmook Kang, Andrea T. Shafer, Lori L. 
                Beason-Held, Susan M. Resnick, Bennett A. Landman, Ilwoo Lyu. 
                <em> Validation of Group-wise Registration for Surface-based Functional 
                MRI Analysis</em>. <em><b>SPIE Medical Imaging, 2021</b></em>
            </li>
            </Typography>
        </ul>
        <Stack direction="column" justify="center" alignItems="center">
            <MePhoto src={WorkplacePhoto}/>
            <Typography variant="caption" align="center" sx={{mt:2}}>
                <em>I don't have a selfie, so here is a picture of my workplace</em>
            </Typography>
        </Stack>
        <Typography variant="h5" align="left" sx={{my:2}}>
            <b>Future Plans</b>
        </Typography>
        <ul>
            <Stack direction="column" spacing={1}>
            <Typography variant="body1" align="left">
                <li>
                    Read up about <em>Godot</em> game engine, and try to contribute to the projects.
                    I plan to start by fixing issues tagged with "junior jobs" 
                    aka begginer friendly.
                </li>
                <li>
                    Add mobile support for this site.
                </li>
                <li>
                    Start a blog section on this site and write down my experience and
                    findings in my future journey in programming.
                </li>
                <li>
                    Survive GaTech and find a job
                </li>
            </Typography>
            </Stack>
        </ul>
        </>
    )
}

export default AboutMe;