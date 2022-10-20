import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import * as prismic from "@prismicio/client";
import { client } from "../../services/prismic";
import { RichText } from "prismic-dom";

import { ParsedUrlQuery } from "querystring";

import { Link, GithubLogo } from "phosphor-react";

import { Container, Section, Aside } from "../../styles/projectSlug";
import { Footer } from "../../components/Footer";
import { Breadcrumb } from "../../components/Breadcrumb";

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
  project_url?: string;
  readme: string;
}

interface ProjectProps {
  project: Project;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>Projeto: {project.slug} | Luiz Eduardo</title>
      </Head>

      <Breadcrumb />

      <Container>
        <h1>{project.title}</h1>

        <div>
          <Aside>
            <p>Resumo:</p>

            <div
              dangerouslySetInnerHTML={{
                __html: RichText.asHtml(project.description),
              }}
            />

            <p>Criado em:</p>

            <span>{project.created_at}</span>

            <p>Veja o projeto no:</p>

            <div>
              <GithubLogo size={20} />
              <a href={project.github_url}>Github</a>
            </div>

            <div>
              <Link size={20} />
              <a href={project?.project_url}>Projeto no ar</a>
            </div>
          </Aside>
          <Section>
            <div
              dangerouslySetInnerHTML={{
                __html: RichText.asHtml(project.readme),
              }}
            />
          </Section>
        </div>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "projects"),
  });

  const paths = response.results.map((post) => ({
    params: { slug: post.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const response = await client.getByUID("projects", String(slug), {});

  const project = {
    slug,
    title: response.data.title,
    description: response.data.description,
    created_at: new Date(response.data.created_at).toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    preview: {
      url: response.data.preview.url,
      alt: response.data.preview.alt,
    },
    github_url: response.data.github.url,
    project_url: response.data?.projeto.url,
    readme: response.data.readme,
  };

  return {
    props: {
      project,
    },
  };
};
