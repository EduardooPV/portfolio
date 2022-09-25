import React from "react";
import Link from "next/link";

import { CalendarBlank } from "phosphor-react";

import { ListPostsProps } from "./types";

import { Container, Post, Title, Description, Date, Tag } from "./styles";

export function ListPosts({ posts }: ListPostsProps) {
  return (
    <Container>
      {posts
        .sort((a: any, b: any) => b.updatedAt.localeCompare(a.updatedAt))
        .map((post) => (
          <Link href={`post/${post.slug}`} passHref key={post.title}>
            <Post>
              <Title>{post.title}</Title>

              <Description>{post.description}</Description>

              <div>
                <Date>
                  <CalendarBlank size={20} color="#F89D24" /> {post.updatedAt}
                </Date>

                {post.tags &&
                  post.tags.map((tag) => (
                    <Tag key={tag}>
                      <span
                        style={
                          tag === "Git"
                            ? { background: "red" }
                            : { background: "blue" }
                        }
                      >
                        {tag}
                      </span>
                    </Tag>
                  ))}
              </div>
            </Post>
          </Link>
        ))}
    </Container>
  );
}
