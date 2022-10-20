import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Head from "next/head";

import { Hero } from "../components/Hero";
const Diviser = dynamic(() =>
  import("../components/Diviser").then((mod) => mod.Diviser)
);
const About = dynamic(() =>
  import("../components/About").then((mod) => mod.About)
);
const Skills = dynamic(() =>
  import("../components/Skills").then((mod) => mod.Skills)
);
const Projects = dynamic(() =>
  import("../components/Projects").then((mod) => mod.Projects)
);
const BackToHome = dynamic(() =>
  import("../components/BackToHome").then((mod) => mod.BackToHome)
);

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
    </>
  );
}
