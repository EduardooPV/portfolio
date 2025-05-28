import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Head from "next/head";

import { Hero } from "../components/Hero";
import { HelloView } from "../components/HelloView";

import { initializeApollo } from "../services/apolloClient";
import { gql } from "@apollo/client";
import { createSlug } from "../utils/formatterSlug";

import ReactGA from "react-ga4";

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

// import { hotjar } from "react-hotjar";
import { GetStaticProps } from "next";
import { ProjectProps, ProjectsProps } from "./projetos";
import { Contact } from "../components/Contact";

export default function Home({ projects, error }: ProjectsProps) {
  const [showHelloView, setShowHelloView] = React.useState(false);

  // const hjid = Number(process.env.NEXT_PUBLIC_HOTJAR_ID);
  // const hjsv = Number(process.env.NEXT_PUBLIC_HOTJAR_SV);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });

    // hotjar.initialize(hjid, hjsv);
  });

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  useEffect(() => {
    const helloViewed = sessionStorage.getItem("helloViewed");
    if (!helloViewed) {
      setShowHelloView(true);
      sessionStorage.setItem("helloViewed", "true");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Início | Luiz Eduardo </title>

        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE}
        />

        <link rel="canonical" href="https://luizeduardo.vercel.app/" />
      </Head>

      {showHelloView && <HelloView />}
      <BackToHome />
      <Hero />
      <About />
      <Diviser />
      <Skills />
      <Projects projects={projects} />
      <Diviser />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const query = gql`
    {
      projectCollection(limit: 2, order: published_DESC) {
        items {
          title
          image {
            url
            width
            height
            description
          }
          type
          tags
          description
          linkPreview
          isActive
          content {
            json
          }
        }
      }
    }
  `;

  try {
    const { data, error } = await apolloClient.query({ query });

    if (error) {
      console.error("Apollo Client Error:", error);
      return {
        props: {
          projects: [],
          error: "Não foi possível carregar os projetos.",
        },
      };
    }

    const projects = data.projectCollection?.items.map(
      (project: ProjectProps) => ({
        ...project,
        slug: createSlug(project.title),
      })
    );

    return {
      props: {
        projects,
      },
      revalidate: 60 * 60 * 24, // 24Horas
    };
  } catch (error) {
    console.error("Network Error:", error);
    return {
      props: {
        projects: [],
        error: "Erro de rede ao carregar os projetos.",
      },
    };
  }
};
