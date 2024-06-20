import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { HelloView } from "../components/HelloView";

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
import { initializeApollo } from "../services/apolloClient";
import { gql } from "@apollo/client";

interface headerProps {
  title: string;
  logo: {
    description: string;
    url: string;
    width: number;
    height: number;
  };
  content: {
    links: {
      text: string;
      href: string;
    }[];
  };
}

interface footerProps {
  title: string;
  content: {
    teste: string;
  };
}

interface Props {
  headerCollection: headerProps;
  footerCollection: footerProps;
}

export default function Home({ headerCollection }: Props) {
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

      <Navbar {...headerCollection} />
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const query = gql`
    {
      headerCollection {
        items {
          title
          logo {
            title
            description
            url
            width
            height
          }
          content
        }
      }
      footerCollection {
        items {
          title
          content
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: query,
  });

  return {
    props: {
      headerCollection: data.headerCollection.items[0],
      footerProps: data.footerCollection.items[0],
    },
    revalidate: 1, // Revalidate at most once every second
  };
}
