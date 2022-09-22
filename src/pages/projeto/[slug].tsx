import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import * as prismic from "@prismicio/client";
import { client } from "../../services/prismic";

import { ParsedUrlQuery } from "querystring";

import { Container } from "../../styles/postSlug";
import { Footer } from "../../components/Footer";

interface Project {
  slug: string;
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
        <title>{project.slug}</title>
      </Head>

      <Container></Container>

      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "projectDetail"),
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

  const project = {
    slug,
  };

  return {
    props: {
      project,
    },
  };
};
