import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useMemo } from "react";
import { useRouter } from "next/router";

import { RichText } from "prismic-dom";
import * as prismic from "@prismicio/client";
import { client } from "../../services/prismic";

import { CalendarBlank, Clock, Tag } from "phosphor-react";

import { ParsedUrlQuery } from "querystring";

import { AsidePerson } from "../../components/AsidePerson";
import { ReadingProgressiveBar } from "../../components/ReadingProgressiveBar";

import { Container, Infos, ContentPost } from "../../styles/postSlug";
import { Footer } from "../../components/Footer";
import { Breadcrumb } from "../../components/Breadcrumb";

interface Post {
  updatedAt: string;
  tags: string[];

  data?: {
    title: string;
    content: {
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function PostPage({ post }: PostProps) {
  const router = useRouter();

  const readTime = useMemo(() => {
    if (router.isFallback) {
      return 0;
    }

    let fullText = "";

    const readWordsPerMinute = 200;

    post.data?.content.forEach((postContent) => {
      fullText += RichText.asText(postContent.body);
    });

    const time = Math.ceil(fullText.split(/\s/g).length / readWordsPerMinute);

    return time;
  }, [post, router.isFallback]);

  return (
    <>
      <Head>
        <title>{post.data?.title}</title>
      </Head>

      <ReadingProgressiveBar />
      
      <Breadcrumb />

      <Container>
        <article>
          <h1>{post.data?.title}</h1>

          <Infos>
            <li>
              <CalendarBlank size={20} color="#F89D24" />
              <span>{post.updatedAt}</span>
            </li>
            <li>
              <Clock size={20} color="#F89D24" />
              <span>{readTime} min</span>
            </li>
            <li>
              <Tag size={20} color="#F89D24" />
              {post?.tags && post?.tags.map((tag) => <p key={tag}>{tag}</p>)}
            </li>
          </Infos>

          <ContentPost>
            {post.data?.content.map((postContent: any, index) => (
              <div key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(postContent.body),
                  }}
                />
              </div>
            ))}

            <AsidePerson />
          </ContentPost>
        </article>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "posts"),
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

  const response = await client.getByUID("posts", String(slug), {});

  const post = {
    slug,
    tags: response.tags,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-br",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    ),
    data: {
      title: response.data.title,
      content: response.data.content,
    },
  };

  return {
    props: {
      post,
    },
  };
};
