import React from "react";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Container,
  Content,
  Header,
  Preview,
  Description,
  Footer,
} from "./styles";
import { ProjectProps } from "../../../pages/projetos";

interface CardProjectProps {
  project: ProjectProps;
  [key: string]: any;
}

export function CardProjectList({ project, ...rest }: CardProjectProps) {
  return (
    <Container {...rest}>
      <Preview>
        <img src={project.image.url} alt={project.image.description} />
      </Preview>

      <Content>
        <Header>
          <div>
            {project.published && <span>Criado em: {project.published}</span>}

            {project.tags && (
              <div>
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
              </div>
            )}
          </div>

          <p>{project.title}</p>
        </Header>

        {project.description && (
          <Description>{project.description}</Description>
        )}

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
            <Link href={project.linkGithub} passHref>
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
      </Content>
    </Container>
  );
}
