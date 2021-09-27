import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FlexPopper } from "./UIFrame";

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

const TechstackIcon = styled('img')({
    width: 30,
    height: 30,
})

export const Projects = () => {
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
    
    return(
        <>
        <FlexPopper open={open} anchorEl={anchorEl} text={text} placement="bottom"/>
        <Box sx={{marginRight:"auto", marginLeft:"auto", maxWidth:"800px"}}>
            <Typography variant="h4" align="center" sx={{mb: 1}}>
                <b>Projects</b>
            </Typography>
            <Typography variant="h6" align="center" sx={{mb: 5}}>
                All my research, school and personal projects so far
            </Typography>
        <Grid 
            container 
            spacing={4}>
            <Grid item xs={4}>
                <Item square>
                <Grid 
                        container 
                        direction="column" 
                        justify="center" 
                        alignItems="center">
                    <Typography variant="h6" align="center" sx={{my:2}}>
                        <b>NORP</b>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{mb: 3}}>
                        <SquareButton 
                            href="http://norp.cc.gatech.edu/"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Site
                        </SquareButton>
                    </Stack>
                    <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                        Media center for non-profit organization data
                    </Typography>
                    <Stack direction="row" sx={{mb: 1}}>
                        <IconButton
                            href="https://reactjs.org/"
                            onMouseOver={onMouseOver("React")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/reactjs-icon.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://www.djangoproject.com/"
                            onMouseOver={onMouseOver("Django")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/django-logo.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://www.metabase.com/"
                            onMouseOver={onMouseOver("Metabase")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/metabase-icon.svg"/>
                        </IconButton>
                    </Stack>
                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item square>
                    <Grid 
                        container 
                        direction="column" 
                        justify="center" 
                        alignItems="center">
                    <Typography variant="h6" align="center" sx={{my:2}}>
                        <b>Online Solitaire</b>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{mb: 3}}>
                        <SquareButton 
                            href="https://github.com/vu-cs4288-20f/assignment6-ChangMarkusYu/"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Source
                        </SquareButton>
                        <SquareButton 
                            href="https://kyrosiberia.net/"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Site
                        </SquareButton>
                    </Stack>
                    <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                        A web-based solitaire game with a user system
                    </Typography>
                    <Stack direction="row" sx={{mb: 1}}>
                        <IconButton
                            href="https://reactjs.org/"
                            onMouseOver={onMouseOver("React")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/reactjs-icon.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://www.mongodb.com/"
                            onMouseOver={onMouseOver("MongoDB")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/mongodb-icon.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://nodejs.org/en/"
                            onMouseOver={onMouseOver("Nodejs")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/nodejs-icon.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://aws.amazon.com/"
                            onMouseOver={onMouseOver("AWS")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/amazon_aws-icon.svg"/>
                        </IconButton>
                    </Stack>
                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item square>
                <Grid 
                        container 
                        direction="column" 
                        justify="center" 
                        alignItems="center">
                    <Typography variant="h6" align="center" sx={{my:2}}>
                        <b>Monkey Compiler</b>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{mb: 3}}>
                        <SquareButton 
                            href="https://github.com/ChangMarkusYu/monkey-lang/"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Source
                        </SquareButton>
                    </Stack>
                    <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                        A toy compiler with hash tables and closures
                    </Typography>
                    <Stack direction="row" sx={{mb: 1}}>
                        <IconButton
                            href="https://golang.org/"
                            onMouseOver={onMouseOver("Golang")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/golang-icon.svg"/>
                        </IconButton>
                    </Stack>
                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item square>
                <Grid 
                        container 
                        direction="column" 
                        justify="center" 
                        alignItems="center">
                    <Typography variant="h6" align="center" sx={{my:2}}>
                        <b>HSD Validation</b>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{mb: 3}}>
                        <SquareButton 
                            href="https://my.vanderbilt.edu/masi/2020/10/validation-of-group-wise-registration-for-surface-based-functional-mri-analysis/"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Writeup
                        </SquareButton>
                        <SquareButton 
                            href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11596/115961X/Validation-of-group-wise-registration-for-surface-based-functional-MRI/10.1117/12.2580771.short"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Video
                        </SquareButton>
                    </Stack>
                    <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                        Testing of a brain surface alignment algorithm
                    </Typography>
                    <Stack direction="row" sx={{mb: 1}}>
                        <IconButton
                            href="https://www.python.org/"
                            onMouseOver={onMouseOver("Python")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/python-icon.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://www.mathworks.com/products/matlab.html"
                            onMouseOver={onMouseOver("MATLAB")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/matlab-icon.svg"/>
                        </IconButton>
                        <IconButton
                            onMouseOver={onMouseOver("Bash")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/bash-icon.svg"/>
                        </IconButton>
                    </Stack>
                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item square>
                <Grid 
                        container 
                        direction="column" 
                        justify="center" 
                        alignItems="center">
                    <Typography variant="h6" align="center" sx={{my:2}}>
                        <b>Emergency Response</b>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{mb: 3}}>
                        <SquareButton 
                            href="https://www.dropbox.com/s/tol0j4505mx95yh/project_report_Chang_Yu_final.pdf?dl=0"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Writeup
                        </SquareButton>
                    </Stack>
                    <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                        Data analysis of traffic accidents in Nashville
                    </Typography>
                    <Stack direction="row" sx={{mb: 1}}>
                        <IconButton
                            href="https://www.python.org/"
                            onMouseOver={onMouseOver("Python")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/python-icon.svg"/>
                        </IconButton>
                        <IconButton
                            href="https://www.influxdata.com/"
                            onMouseOver={onMouseOver("InfluxDB")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/influxdata-logo.svg"/>
                        </IconButton>
                    </Stack>
                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item square>
                <Grid 
                        container 
                        direction="column" 
                        justify="center" 
                        alignItems="center">
                    <Typography variant="h6" align="center" sx={{my:2}}>
                        <b>Space Invaders</b>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{mb: 3}}>
                        <SquareButton 
                            href="https://github.com/ChangMarkusYu/SpaceInvaders"
                            variant="outlined" 
                            color="inherit" 
                            size="small">
                            Source
                        </SquareButton>
                    </Stack>
                    <Typography variant="body1" align="center" sx={{mb: 1, mx: 2}}>
                        A Python clone of the classic retro arcade game
                    </Typography>
                    <Stack direction="row" sx={{mb: 1}}>
                        <IconButton
                            href="https://www.python.org/"
                            onMouseOver={onMouseOver("Python")}
                            onMouseLeave={onMouseLeave}>
                            <TechstackIcon src="/python-icon.svg"/>
                        </IconButton>
                    </Stack>
                    </Grid>
                </Item>
            </Grid>
        </Grid>
        </Box>   
        </>
    )
}