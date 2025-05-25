import React, { useEffect } from "react";
import { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MediaContextProvider } from "../components/MediaScreen";

import ReactGA from 'react-ga4';

import AOS from "aos";
import "aos/dist/aos.css";
import { PageTransition } from '../components/PageTransition';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

    AOS.init();
  }, []);

  return (
    <MediaContextProvider>
      <GlobalStyle />
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
    </MediaContextProvider>
  );
}

export default MyApp;
