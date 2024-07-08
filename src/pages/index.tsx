import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Head from "next/head";

import { Hero } from "../components/Hero";
import { HelloView } from "../components/HelloView";

import ReactGA from "react-ga";

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
  const hjid = Number(process.env.HOTJAR_ID);
  const hjsv = Number(process.env.HOTJAR_SV);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });
    hotjar.initialize(hjid, hjsv);
  });

  return (
    <>
      <Head>
        <title>Início | Luiz Eduardo </title>
      </Head>

      <HelloView />
      <BackToHome />
      <Hero />
      <Diviser />
      <About />
      <Diviser />
      <Skills />
      <Diviser />
      <Projects />
    </>
  );
}
