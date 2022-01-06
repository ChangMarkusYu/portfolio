import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import SchoolIcon from '@mui/icons-material/School';
import BiotechIcon from '@mui/icons-material/Biotech';
import WorkIcon from '@mui/icons-material/Work';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Helmet } from "react-helmet";

const Home = () => {
    return(
        <>
        <Helmet>
            <title>Home | Chang Yu</title>
        </Helmet>
        <Typography variant="h3" align="justify" sx={{mb: 3}}>
            <b>Hi, I'm Chang Yu.</b>
        </Typography>
        <Typography variant="h6" align="justify">
            I'm a <b>MSCS</b> student at <b>Georgia Tech</b>. 
            I enjoy full stack web development, building open-source projects,
            and playing around with Linux. My interests and skills span many
            areas of software engineering.
        </Typography>
        <Stack direction="row" spacing={2} sx={{mt:3}} >
            <Button 
                href="https://www.dropbox.com/s/8vd4jvhs3lq7ydt/CV_Chang%20Yu.pdf?dl=0"
                target="_blank"
                rel="noreferrer"
                variant="outlined" 
                color="inherit" 
                sx={{px:1}}>
                <DownloadIcon sx={{mr:1}}/>
                Resume
            </Button>
            <Button 
                href="https://github.com/ChangMarkusYu"
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                color="inherit" 
                sx={{px:1}}>
                <GitHubIcon sx={{mr:1}}/>
                GitHub
            </Button>
            <Button 
                href="https://www.linkedin.com/in/chang-yu-0a2a73157/"
                target="_blank"
                rel="noreferrer"
                variant="outlined" 
                color="inherit" 
                sx={{px:1}}>
                <LinkedInIcon sx={{mr:1}}/>
                LinkedIn
            </Button>
        </Stack>
        <Typography variant="h4" sx={{mt: 8}}><b>My Timeline</b></Typography>
        <MyTimeLine/>
        <Typography variant="h5" sx={{mt: 8}}><b>Acknowledgement</b></Typography>
        <Typography variant="body1" align="justify" sx={{mt: 2}}>
            Much of the designs and ideas of this site are shamelessly stolen from {" "}
            <ATag href="taniarascia.com/">Tania Rascia</ATag>
            , who generously made her beautiful website open source. Go check her out!
        </Typography>
        </>
    )
}

const MyTimeLine = () => {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    Built with Material UI
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                        <TimelineDot variant="outlined">
                            <ArchitectureIcon/>
                            </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                    Portfolio Site
                    </Typography>
                    <Typography>Sep 2021 - Present</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    M.S. in Computer Science
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                        <TimelineDot variant="outlined">
                            <SchoolIcon/>
                            </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                    Georgia Tech
                    </Typography>
                    <Typography>Aug 2021 - Dec 2022</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    Web-based card game
                    <br/>
                    <Typography variant="caption">
                        <ATag href="https://kyrosiberia.net/">
                            https://kyrosiberia.net/
                        </ATag>
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                        <TimelineDot variant="outlined">
                            <SportsEsportsIcon/>
                            </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                    Online Solitare
                    </Typography>
                    <Typography>Aug 2020 - May 2021</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    Teaching Assistant
                    <br/>
                    <Typography variant="caption">
                        Computer Networks, Data Structures
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                        <TimelineDot variant="outlined">
                            <WorkIcon/>
                            </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                    VUSE
                    </Typography>
                    <Typography>Aug 2020 - May 2021</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    Research Assistant
                    <br/>
                    <Typography variant="caption">
                    <ATag href="https://tinyurl.com/4unsf9tf">Paper</ATag>{" "}
                    published at SPIE 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                        <TimelineDot variant="outlined">
                            <BiotechIcon/>
                            </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                    MASI Lab
                    </Typography>
                    <Typography>Jan 2020 - Aug 2020</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    B.S. in Computer Science
                    <br/>
                    <Typography variant="caption">
                        Summa Cum Laude
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                        <TimelineDot variant="outlined">
                            <SchoolIcon/>
                            </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                    Vanderbilt University
                    </Typography>
                    <Typography>Aug 2017 - May 2021</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

const ATag = (props) => {
    return (
        <a 
            style={{color: "inherit", textDecoration: "none"}}
            href={props.href}
            target="_blank"
            rel="noreferrer">
            <u>{props.children}</u>
        </a>
    )
}

export default Home;