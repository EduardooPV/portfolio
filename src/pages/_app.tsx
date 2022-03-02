import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { WidthProvider } from "../utils/useWidth";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { combineTheme, dark, light } from "../styles/theme";
import usePersistedState from "../utils/usePersistedState";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState("theme", combineTheme(dark));

  const toggleTheme = () => {
    setTheme(
      theme.title === "light" ? combineTheme(dark) : combineTheme(light)
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <WidthProvider>
          <GlobalStyle />
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Component {...pageProps} />
        </WidthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
