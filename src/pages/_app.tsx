import React, { useCallback, useEffect } from "react";
import { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MediaContextProvider } from "../components/MediaScreen";

import ReactGA from "react-ga4";

import AOS from "aos";
import "aos/dist/aos.css";
import { PageTransition } from "../components/PageTransition";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { options } from "../utils/partials";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

    AOS.init();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <MediaContextProvider>
      <GlobalStyle />
      <Navbar />
      <PageTransition>
        <div style={{ overflow: "hidden" }}>
          <Component {...pageProps} />
        </div>
      </PageTransition>
      <Footer />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -9990,
          pointerEvents: "none",
        }}
      />
    </MediaContextProvider>
  );
}

export default MyApp;
