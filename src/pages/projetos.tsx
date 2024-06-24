import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";

import { ListProjects } from "../components/ListProjects";
import { Breadcrumb } from "../components/Breadcrumb";
import { initializeApollo } from "../services/apolloClient";
import { gql } from "@apollo/client";
import { format } from "date-fns";
import { createSlug } from "../utils/formatterSlug";

export interface ProjectProps {
  title: string;
  slug: string;
  published: string;
  image: {
    url: string;
    width: string;
    height: string;
    description: string;
  };
  description: string;
  linkGithub: string;
  linkPreview: string;
  content: {
    json: any;
  };
}

export interface ProjectsProps {
  projects: ProjectProps[];
  error?: string;
}

export default function Projetos({ projects, error }: ProjectsProps) {
  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  return (
    <>
      <Head>
        <title>Projetos | Luiz Eduardo</title>
      </Head>

      <Breadcrumb />

      <ListProjects projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const query = gql`
    {
      projectCollection {
        items {
          title
          published
          image {
            url
            width
            height
            description
          }
          description
          linkGithub
          linkPreview
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
        published: format(new Date(project.published), "dd/MM/yyyy"),
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
