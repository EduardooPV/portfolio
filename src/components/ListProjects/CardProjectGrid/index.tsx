import React from "react";

import "react-loading-skeleton/dist/skeleton.css";

import { Container, Header, Preview } from "./styles";
import { ProjectProps } from "../../../pages/projetos";
import { TagsProject } from "../../TagsProject";
import { ProjectTypeTag } from "../../ProjectType";

interface CardProjectProps {
  project: ProjectProps;
  titleCenter?: boolean;
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
    <Container
      {...rest}
      href={project.isActive ? project.linkPreview : ""}
      target="_blank"
      rel="noopener noreferrer"
      isActive={project.isActive}
    >
      <Header style={headerStyle}>
        <div>
          <p>{project.title}</p>

          <ProjectTypeTag type={project?.type} />
        </div>

        {project.tags && <TagsProject tags={project.tags} />}
      </Header>

      <Preview>
        <img src={project.image.url} alt={project.image.description} />
      </Preview>
    </Container>
  );
}
