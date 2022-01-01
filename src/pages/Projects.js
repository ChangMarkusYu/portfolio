import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IconButtonWithPopper } from "../components/IconButtonWithPopper"

const ProjectList = [
    {
        title: "NORP [In Progress]",
        tagline: "Media center for non-profit organization data",
        site: "http://norp.cc.gatech.edu/",
        video: "https://www.dropbox.com/sh/s1klixmiqw9749o/AAC1oh9JAoqCIC93CA0-i3NSa?dl=0",
        tech: ["React", "Django", "Metabase"],
    },
    {
        title: "Online Solitaire",
        tagline: "A web-based solitaire game with a user system",
        source: "https://github.com/vu-cs4288-20f/assignment6-ChangMarkusYu/",
        site: "https://kyrosiberia.net/",
        tech: ["React", "MongoDB", "Nodejs", "AWS"]
    },
    {
        title: "Monkey Compiler",
        tagline: "A toy compiler with hash tables and closures",
        source: "https://github.com/ChangMarkusYu/monkey-lang/",
        tech: ["Golang"]
    },
    {
        title: "HSD Validation",
        tagline: "Testing of a brain surface alignment algorithm",
        writeup: "https://my.vanderbilt.edu/masi/2020/10/validation-of-group-wise-registration-for-surface-based-functional-mri-analysis/",
        video:"https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11596/115961X/Validation-of-group-wise-registration-for-surface-based-functional-MRI/10.1117/12.2580771.short",
        tech: ["Python", "MATLAB"]
    },
    {
        title: "Emergency Response",
        tagline: "Data analysis of traffic accidents in Nashville",
        writeup: "https://www.dropbox.com/s/tol0j4505mx95yh/project_report_Chang_Yu_final.pdf?dl=0",
        tech: ["Python", "InfluxDB"]
    },
    {
        title: "Space Invaders",
        tagline: "A Python clone of the classic retro arcade game",
        source: "https://github.com/ChangMarkusYu/SpaceInvaders",
        tech: ["Python"]
    },
    {
        title: "Portfolio Site",
        tagline: "You are looking at it right now",
        source: "https://github.com/ChangMarkusYu/portfolio",
        tech: ["React", "MaterialUI", "Netlify"]
    },
];

const TechUrls = {
    "React": "https://reactjs.org/",
    "Django": "https://www.djangoproject.com/",
    "Metabase": "https://www.metabase.com/",
    "MongoDB": "https://www.mongodb.com/",
    "Nodejs": "https://nodejs.org/",
    "AWS": "https://aws.amazon.com/",
    "Golang": "https://golang.org/",
    "MATLAB": "https://www.mathworks.com/products/matlab.html",
    "InfluxDB": "https://www.influxdata.com/",
    "MaterialUI": "https://mui.com/",
    "Netlify": "https://www.netlify.com/"
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: "theme.palette.text.primary",
    backgroundColor: theme.palette.mode === "dark" ? "#1b1b1b" : "#eeeeee",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "black" : "grey",
}));

const SquareButton = styled(Button)({
    borderRadius: "0em",
});

const ProjectItemButton = ({href, text}) => {
    return (
        <SquareButton 
            href={href}
            target="_blank"
            rel="noreferrer"
            variant="outlined" 
            color="inherit" 
            size="small">
            {text}
        </SquareButton>
    )
}

const TechstackIcon = styled('img')({
    width: 30,
    height: 30,
})

const TechButton = ({tech}) => {
    return(
        <IconButtonWithPopper 
            popperText={tech} 
            IconComponent={TechstackIcon}
            iconSrc={`${tech}-icon.svg`}
            href={TechUrls[tech]}
            placement="bottom"/>
    )
}

const ProjectGridItem = ({project}) => {
    return (
        <Grid item xs={8} md={4}>
            <Item square>
                <Grid 
                    container 
                    direction="column" 
                    justify="center" 
                    alignItems="center">
                <Typography variant="h6" align="center" sx={{my:2}}>
                    <b>{project.title}</b>
                </Typography>
                <Stack direction="row" spacing={1} sx={{mb: 3}}>
                    {project.source && <ProjectItemButton href={project.source} text="Source"/>}
                    {project.site && <ProjectItemButton href={project.site} text="Site"/>}
                    {project.writeup && <ProjectItemButton href={project.writeup} text="Writeup"/>}
                    {project.video && <ProjectItemButton href={project.video} text="Video"/>}
                </Stack>
                <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                    {project.tagline}
                </Typography>
                <Stack direction="row" sx={{mb: 1}}>
                    {
                        project.tech.map((techName, i) => {
                            return (<TechButton tech={techName} key={i}/>)
                        })
                    }
                </Stack>
                </Grid>
            </Item>
        </Grid>
    )
}

const Projects = () => {    
    return(
        <>
        <Box sx={{marginRight:"auto", marginLeft:"auto", maxWidth:"800px"}}>
            <Typography variant="h4" align="center" sx={{mb: 1}}>
                <b>Projects</b>
            </Typography>
            <Typography variant="h6" align="center" sx={{mb: 5}}>
                All my research, school and personal projects so far
            </Typography>
        <Grid 
            container 
            spacing={4}
            justifyContent="center">
            {
                ProjectList.map((project, i) => {
                    return (<ProjectGridItem project={project} key={i}/>)
                })
            }
        </Grid>
        </Box>   
        </>
    )
}

export default Projects;