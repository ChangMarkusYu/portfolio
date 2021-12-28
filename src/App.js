import { useState } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { UIFrame } from "./components/UIFrame";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects"
import { Home } from "./pages/Home"
import { CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./components/Theme";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const App = () => {
  const [dark, setDark] = useState(true);
  const changeTheme = () => {
    setDark(!dark);
  }

  return (
    <BrowserRouter>
      <CssBaseline/>
      <ThemeProvider theme={dark ? createTheme(DarkTheme) : createTheme(LightTheme)}>
      <UIFrame changeTheme={changeTheme} dark={dark}/>
      <Paper elevation={9} square sx={{pt:15, pl:6, pb:5,flexGrow:1, minHeight:"100vh"}}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/me" component={AboutMe}/>
        <Route exact path="/projects" component={Projects}/>
      </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
