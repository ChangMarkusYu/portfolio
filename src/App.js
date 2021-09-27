import { useState } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { UIFrame } from "./components/UIFrame";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects"
import { Home } from "./components/Home"
import { CssBaseline } from "@mui/material";
import { DarkTheme, LightTheme } from "./components/Theme";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

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
      <Route exact path="/" component={Home}/>
      <Route exact path="/me" component={AboutMe}/>
      <Route exact path="/projects" component={Projects}/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
