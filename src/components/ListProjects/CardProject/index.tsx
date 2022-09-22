import React from "react";
import Link from "next/link";
import { RichText } from "prismic-dom";

import { AiFillGithub } from "react-icons/ai";
import "react-loading-skeleton/dist/skeleton.css";

import { CardProps } from "./types";

import { Container, Header, Preview, Description, Footer } from "./styles";

export function CardProject({ props }: CardProps) {
  return (
    <Container>
      <Header>
        <p>{props.title}</p>

        <span>Criado em: {props.created_at}</span>
      </Header>

      <Preview>
        <img src={props.preview.url} alt={props.preview.alt} />
      </Preview>

      <Description
        dangerouslySetInnerHTML={{
          __html: RichText.asHtml(props.description),
        }}
      />

      <Footer>
        <Link href="#" passHref>
          <a target="_blank" rel="noreferrer">
            Detalhes do projeto
          </a>
        </Link>
        <Link href={props.github_url}>
          <a
            target="_blank"
            rel="noreferrer"
            title="Visite o projeto no Github"
          >
            <AiFillGithub />
          </a>
        </Link>
      </Footer>
    </Container>
  );
}
