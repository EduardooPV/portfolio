import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { ParsedUrlQuery } from "querystring";

import { Link } from "phosphor-react";

import { Container, Section, Aside, Content } from "../../styles/projectSlug";
import { Breadcrumb } from "../../components/Breadcrumb";
import { initializeApollo } from "../../services/apolloClient";
import { gql } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { Diviser } from "../../components/Diviser";
import { Contact } from "../../components/Contact";
import { ProjectsProps } from "../projetos";
import { ListProjects } from "../../components/ListProjects";
import { CardProjectResume } from "../../components/ListProjects/CardProjectResume";
import { Projects } from "../../components/Projects";
import { ProjectTypeTag } from "../../components/ProjectType";
import { TagsProject } from "../../components/TagsProject";

interface Project {
  title: string;
  slug: string;
  published: string;
  image: {
    url: string;
    width: string;
    height: string;
    description: string;
  };
  type: string;
  tags?: string[];
  description: string;
  linkPreview: string;
  isActive: boolean;
  content: {
    json: Document;
  };
}

interface IProjectProps {
  project: Project;
  otherProjects: Project[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function ProjectPage({ project, otherProjects }: IProjectProps) {
  return (
    <>
      <Head>
        <title> {project?.title} | Luiz Eduardo</title>
      </Head>

      <Breadcrumb />

      <Container>
        <Content>
          <Section>
            {project?.content?.json && (
              <div>{documentToReactComponents(project.content.json)}</div>
            )}
          </Section>

          <Aside>
            <div>
              <p>{project?.title}</p>

              <ProjectTypeTag type={project.type} />
            </div>

            <span>{project?.description}</span>

            <div>
              <a href={project?.linkPreview} target="_blank" rel="noreferrer">
                <Link size={20} />
                Acessar site
              </a>

              <TagsProject tags={project.tags} />
            </div>
          </Aside>
        </Content>
      </Container>

      <Diviser />

      {otherProjects && <Projects projects={otherProjects} simplified={true} />}

      <Contact />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const apolloClient = initializeApollo();

  const queryProject = gql`
    {
      projectCollection(
        where: { slug: "${slug}" }
        limit: 1
      ) {
        items {
          title
          published

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

  const queryOtherProjects = gql`
    {
      projectCollection(
        where: { slug_not: "${slug}" }
        limit: 2
      ) {
        items {
          title
          published

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
    const { data: projectData, error: projectError } = await apolloClient.query(
      {
        query: queryProject,
      }
    );

    const { data: otherProjectsData, error: otherProjectsError } =
      await apolloClient.query({
        query: queryOtherProjects,
      });

    if (projectError || otherProjectsError) {
      return {
        props: {
          error: "Erro ao carregar os dados dos projetos.",
        },
      };
    }

    const project = projectData.projectCollection?.items[0];
    const otherProjects = otherProjectsData.projectCollection?.items;

    return {
      props: {
        project,
        otherProjects,
      },
      revalidate: 60 * 60 * 24, // 24 horas
    };
  } catch (error) {
    console.error("Apollo Client Error:", error);
    return {
      props: {
        error: "Erro de rede ao carregar os projetos.",
      },
    };
  }
};
