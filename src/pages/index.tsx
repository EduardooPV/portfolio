import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { combineTheme, dark, light } from "../styles/theme";
import usePersistedState from '../utils/usePersistedState'

import { Navbar } from "../components/Navbar";

export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', combineTheme(dark));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };

  return  (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
    </ThemeProvider>
  )
}
