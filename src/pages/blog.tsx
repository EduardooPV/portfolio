import type { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";

import * as prismic from "@prismicio/client";
import { client } from "../services/prismic";

import { ListPosts } from "../components/ListPosts";
import { Breadcrumb } from "../components/Breadcrumb";

interface Post {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Blog({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Blog | Luiz Eduardo</title>
        <meta
          name="description"
          content="Blog desenvolvido com intuito de fixar todos os conhecimentos absorvidos durante meus estudos"
        />
      </Head>

      <Breadcrumb />

      <ListPosts posts={posts}  />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "posts"),
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title,
      description: post.data.description,
      updatedAt: new Date(post.first_publication_date).toLocaleDateString(
        "pt-br",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      ),
      tags: post.tags,
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 24Horas
  };
};
