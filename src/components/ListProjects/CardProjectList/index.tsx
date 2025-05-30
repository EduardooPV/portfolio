import React from "react";

import "react-loading-skeleton/dist/skeleton.css";

import {
  Container,
  Content,
  Header,
  Preview,
  Description,
  IsNotActive,
} from "./styles";
import { ProjectProps } from "../../../pages/projetos";
import { TagsProject } from "../../TagsProject";
import { ProjectTypeTag } from "../../ProjectType";

interface CardProjectProps {
  project: ProjectProps;
}

export function CardProjectList({ project, ...rest }: CardProjectProps) {
  return (
    // <Container
    //   {...rest}
    //   href={`/projeto/${project.slug}`}
    //   isActive={project.isActive}
    // ></Container>
    <Container
      {...rest}
      href={project.isActive && project.linkPreview}
      target="_blank"
      rel="noopener noreferrer"
      isActive={project.isActive}
    >
      <Preview>
        <img src={project.image.url} alt={project.image.description} />
      </Preview>

      <Content>
        <Header>
          <div>
            <p>{project.title}</p>

            <ProjectTypeTag type={project?.type} />
          </div>

          {/* {!project.isActive && (
            <IsNotActive>{!project.isActive && "Inativo"}</IsNotActive>
          )} */}

          {project.tags && <TagsProject tags={project.tags} />}
        </Header>

        {project.description && (
          <Description>{project.description}</Description>
        )}
      </Content>
    </Container>
  );
}
