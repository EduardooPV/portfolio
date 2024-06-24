import React from "react";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import "react-loading-skeleton/dist/skeleton.css";

import { Container, Header, Preview, Description, Footer } from "./styles";
import { ProjectProps } from "../../../pages/projetos";

interface CardProjectProps {
  project: ProjectProps;
  [key: string]: any;
}

export function CardProjectGrid({ project, ...rest }: CardProjectProps) {
  return (
    <Container {...rest}>
      <Header>
        <p>{project.title}</p>

        {project.published && <span>Criado em: {project.published}</span>}
      </Header>

      <Preview>
        <img src={project.image.url} alt={project.image.description} />
      </Preview>

      {project.description && <Description>{project.description}</Description>}

      <Footer>
        {project.linkPreview && (
          <Link href={`projeto/${project.slug}`} passHref>
            <a>Detalhes do projeto</a>
          </Link>
        )}
        {project.linkGithub && (
          <Link href={project.linkGithub}>
            <a
              target="_blank"
              rel="noreferrer"
              title="Visite o projeto no Github"
            >
              <AiFillGithub />
            </a>
          </Link>
        )}
      </Footer>
    </Container>
  );
}
