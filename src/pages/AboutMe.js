import React from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import WorkplacePhoto from '../assets/workplace.jpg'
import { Helmet } from "react-helmet";

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
        <Helmet>
            <title>About | Chang Yu</title>
        </Helmet>
        <Typography variant="h4" align="center" sx={{mb: 1}}>
            <b>About me</b>
        </Typography>
        <Typography variant="h6" align="center" sx={{mb: 5}}>
            Developer, Average Linux Fan, Student
        </Typography>
        <Typography variant="body1" align="justify" sx={{mb:4}}>
        I am currently working at Google as a Software Engineer.
        I am interested in web development, software engineering, and operating systems.
        I graduated from Vanderbilt University and Georgia Institute of Technology.
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
                    <s>Submit my first Linux kernel patch.</s>
                </li>
                <li>
                    Add mobile support for this site.
                </li>
                <li>
                    Add Search Engine Optimization (SEO) for this site.
                </li>
                <li>
                    <s>Survive Georgia Tech and find a full-time position</s>
                </li>
            </Typography>
            </Stack>
        </ul>
        </>
    )
}

export default AboutMe;