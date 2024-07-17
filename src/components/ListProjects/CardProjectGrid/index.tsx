import React from "react";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Container,
  Header,
  Preview,
  Tags,
  Description,
  Footer,
} from "./styles";
import { ProjectProps } from "../../../pages/projetos";

interface CardProjectProps {
  project: ProjectProps;
  titleCenter?: boolean;
  [key: string]: any;
}

export function CardProjectGrid({
  project,
  titleCenter = false,
  ...rest
}: CardProjectProps) {
  const headerStyle = {
    justifyContent: titleCenter ? "center" : "space-between",
  };

  return (
    <Container {...rest}>
      <Header style={headerStyle}>
        <p>{project.title}</p>

        {project.published && <span>Criado em: {project.published}</span>}
      </Header>

      <Preview>
        <img src={project.image.url} alt={project.image.description} />
      </Preview>

      {project.tags && (
        <Tags>
          {project.tags.map(({ text, color }) => (
            <p
              key={text}
              style={{
                backgroundColor: color,
              }}
            >
              {text}
            </p>
          ))}
        </Tags>
      )}

      {project.description && <Description>{project.description}</Description>}

      <Footer>
        {project.linkPreview && (
          <Link href={`projeto/${project.slug}`} passHref>
            <a title="Visite a página do projeto">
              Detalhes do projeto
              <FiExternalLink />
            </a>
          </Link>
        )}
        {project.linkGithub && (
          <Link href={project.linkGithub}>
            <a
              target="_blank"
              rel="noreferrer"
              title="Visite o projeto no Github"
            >
              Veja no Github
              <AiFillGithub />
            </a>
          </Link>
        )}
      </Footer>
    </Container>
  );
}
