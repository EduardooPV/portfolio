import React, { useEffect } from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { combineTheme, dark, light } from "../styles/theme";
import usePersistedState from "../utils/usePersistedState";
import { MediaContextProvider } from "../components/MediaScreen";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState("theme", combineTheme(dark));

  const toggleTheme = () => {
    setTheme(
      theme.title === "light" ? combineTheme(dark) : combineTheme(light)
    );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <MediaContextProvider>
          <GlobalStyle />
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Component {...pageProps} />
        </MediaContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
