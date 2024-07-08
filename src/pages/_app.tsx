import React, { useEffect } from "react";
import { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MediaContextProvider } from "../components/MediaScreen";

import ReactGA from 'react-ga4';

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  ReactGA.initialize("G-4QSYE7G5ZQ");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MediaContextProvider>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MediaContextProvider>
  );
}

export default MyApp;
