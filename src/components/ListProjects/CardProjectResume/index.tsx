import React from "react";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Container,
  Header,
  Preview,
  Description,
  Footer,
} from "./styles";
import { ProjectProps } from "../../../pages/projetos";

interface CardProjectResumeProps {
  project: ProjectProps;
  [key: string]: any;
}

export function CardProjectResume({
  project,
  ...rest
}: CardProjectResumeProps) {


  return (
    <Container {...rest}>
      <Header>
        <p>{project.title}</p>
      </Header>

      <Preview>
        <img src={project.image.url} alt={project.image.description} />
      </Preview>

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
