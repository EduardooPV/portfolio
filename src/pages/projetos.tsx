import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";

import * as prismic from "@prismicio/client";
import { client } from "../services/prismic";

import { ListProjects } from "../components/ListProjects";

interface Project {
  slug: string;
  title: string;
  description: string;
  created_at: string;
  preview: {
    url: string;
    alt: string;
  };
  github_url: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projetos({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projetos | Luiz Eduardo</title>
      </Head>

      <ListProjects projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "projects"),
  });

  const projects = response.results.map((project) => {
    return {
      slug: project.uid,
      title: project.data.title,
      description: project.data.description,
      created_at: project.data.created_at,
      preview: {
        url: project.data.preview.url,
        alt: project.data.preview.alt,
      },
      github_url: project.data.github.url,
    };
  });

  return {
    props: {
      projects,
    },
    // revalidate: 60 * 60 * 24 // 24Horas
    revalidate: 1,
  };
};
