import React from "react";
import { Container, Header, Description, Footer } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import "react-loading-skeleton/dist/skeleton.css";
import { CardProps } from "./types";
import Link from "next/link";
import { RichText } from "prismic-dom";

export function CardProject({ props }: CardProps) {
  console.log(props.description);

  return (
    <Container>
      <Header>
        <p>{props.title}</p>

        <span>Criado em: {props.created_at}</span>
      </Header>

      <Description
        dangerouslySetInnerHTML={{
          __html: RichText.asHtml(props.description),
        }}
      />

      <Footer>
        <Link href="#" passHref>
          <a target="_blank" rel="noreferrer">
            Visualizar site
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
