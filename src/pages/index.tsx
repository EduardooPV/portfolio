import React from "react";
import Head from "next/head";
import { Diviser } from "../components/Diviser";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { BackToHome } from "../components/BackToHome";

export default function Home() {
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
