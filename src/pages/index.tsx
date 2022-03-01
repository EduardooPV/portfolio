import { combineTheme, dark, light } from "../styles/theme";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { WidthProvider } from "../utils/useWidth";
import usePersistedState from '../utils/usePersistedState'

export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', combineTheme(dark));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };

  return  (
    <ThemeProvider theme={theme}>
      <WidthProvider>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Hero />
      </WidthProvider>
    </ThemeProvider>
  )
}
