import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";

const MePhoto = styled('img')({
    width: "80%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
});

export const AboutMe = () => {
    return(
        <Paper elevation={9} square sx={{pl:40, pt:7, flexGrow:1, pb: 5}}>
            <Box sx={{pr: 47, mt: 2}}>
            <Typography variant="h4" align="center" sx={{mb: 1}}>
                <b>About me</b>
            </Typography>
            <Typography variant="h6" align="center" sx={{mb: 5}}>
                Student, Developer, Average Linux Fan
            </Typography>
            <Typography variant="subtitle2" align="justify" sx={{mb:4}}>
            I am a graduate student of the MSCS program of Georgia Institute of Technology. 
            I am interested in web development, software engineering, and operating systems.
            I am currently looking for internship opportunities in Summer 2022.
            </Typography>
            <Typography variant="h5" align="left" sx={{my:2}}>
            <b>My skills</b>
            </Typography>
            <Typography variant="subtitle2" align="left" sx={{mb:4}}>
                <ul>
                    <Stack direction="column" spacing={1}>
                    <li>C/C++, Python, JavaScript, Java, MATLAB, x86 Assembly, Bash Script, HTML, CSS</li>
                    <li>React, Express, Django, MongoDB, SQL</li>
                    <li>Docker, AWS, Git, Linux</li>
                    </Stack>
                </ul>
            </Typography>
            <Typography variant="h5" align="left" sx={{my:2}}>
            <b>Publications</b>
            </Typography>
            <Typography variant="subtitle2" align="left" sx={{mb:4}}>
                <ul>
                    <li><b>Chang Yu</b>, Yue Liu, Leon Y. Cai, Cailey I. Kerley, Kaiwen Xu, 
                        Warren D. Taylor, Hakmook Kang, Andrea T. Shafer, Lori L. 
                        Beason-Held, Susan M. Resnick, Bennett A. Landman, Ilwoo Lyu. 
                        <em> Validation of Group-wise Registration for Surface-based Functional 
                        MRI Analysis</em>. <em><b>SPIE Medical Imaging, 2021</b></em>
                    </li>
                </ul>
            </Typography>
            <Stack direction="column" justify="center" alignItems="center">
                <MePhoto src="/workplace.jpg"/>
                <Typography variant="caption" align="center" sx={{mt:2}}>
                    <em>I don't have a selfie, so here is a picture of my workplace</em>
                </Typography>
            </Stack>
            <Typography variant="h5" align="left" sx={{my:2}}>
            <b>Future Plans</b>
            </Typography>
            <Typography variant="subtitle2" align="left">
                <ul>
                <Stack direction="column" spacing={1}>
                    <li>
                        Read up about <em>Godot</em> game engine, and try to contribute to the projects.
                        I plan to start by fixing issues tagged with "junior jobs" 
                        aka begginer friendly.
                    </li>
                    <li>
                        Start a blog section on this site and write down my experience and
                        findings in my future journey in programming.
                    </li>
                    <li>
                        Survive GaTech and find a job
                    </li>
                </Stack>
                </ul>
            </Typography>
            </Box>
        </Paper>
    )
}