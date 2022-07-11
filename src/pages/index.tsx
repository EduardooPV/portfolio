import React from "react";
import { Diviser } from "../components/Diviser";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Diviser />
      <About />
      <Diviser />
      <Skills />
      <Projects />
    </>
  );
}
