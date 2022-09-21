import React, { useEffect } from "react";
import Head from "next/head";
import { Diviser } from "../components/Diviser";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { BackToHome } from "../components/BackToHome";

import { hotjar } from "react-hotjar";

export default function Home() {
  const hjid = 3080565;
  const hjsv = 6;

  useEffect(() => {
    hotjar.initialize(hjid, hjsv);
  });

  return (
    <>
      <Head>
        <title>Início | Luiz Eduardo </title>        
      </Head>
      <BackToHome />
      <Hero />
      <Diviser />
      <About />
      <Diviser />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
