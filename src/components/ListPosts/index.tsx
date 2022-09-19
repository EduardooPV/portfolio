import React, { useState } from "react";
import Link from "next/link";

import {
  Container,
  SearchBar,
  Post,
  Title,
  Description,
  Date,
  Tag,
} from "./styles";

import { CalendarBlank, MagnifyingGlass } from "phosphor-react";

interface Post {
  slug: string;
  title: string;
  description: string;
  tag: string;
  updatedAt: string;
}
interface ListPostsProps {
  posts: {
    slug: string;
    title: string;
    description: string;
    tag: string;
    updatedAt: string;
  }[];
}

export function ListPosts({ posts }: ListPostsProps) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState<Post[]>([]);

  function searchItems(searchValue) {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredPost = posts.filter((post) => {
        return Object.values(post.title)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredPost);
    } else {
      setFilteredResults(posts);
    }
  }

  return (
    <Container>
      <SearchBar>
        <input
          type="text"
          id="search"
          placeholder="Buscar artigo..."
          onChange={(event) => searchItems(event.target.value)}
        />
        <label htmlFor="search">
          <MagnifyingGlass size={25} color="#F89D24" name="search" />
        </label>
      </SearchBar>

      {(searchInput.length > 1 ? filteredResults : posts).map((post) => (
        <Link href={`post/${post.slug}`} passHref key={post.title}>
          <Post>
            <Title>{post.title}</Title>

            <Description>{post.description}</Description>

            <div>
              <Date>
                <CalendarBlank size={20} color="#F89D24" /> {post.updatedAt}
              </Date>

              {post.tag && (
                <Tag>
                  <span
                    style={
                      post.tag === "Git"
                        ? { background: "red" }
                        : { background: "blue" }
                    }
                  >
                    {post.tag}
                  </span>
                </Tag>
              )}
            </div>
          </Post>
        </Link>
      ))}
    </Container>
  );
}
