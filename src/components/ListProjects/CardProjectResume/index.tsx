import React from "react";
import Link from "next/link";

import "react-loading-skeleton/dist/skeleton.css";

import { Container, Header, Preview } from "./styles";
import { ProjectProps } from "../../../pages/projetos";

import { TagsProject } from "../../TagsProject";
import { ProjectTypeTag } from "../../ProjectType";

interface CardProjectResumeProps {
  project: ProjectProps;
}

export function CardProjectResume({
  project,
  ...rest
}: CardProjectResumeProps) {
  return (
    <a
      href={project.isActive && project.linkPreview}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      <Container>
        <Header>
          <div>
            <p>{project.title}</p>

            <ProjectTypeTag type={project?.type} />
          </div>

          {project.tags && <TagsProject tags={project.tags} />}
        </Header>

        <Preview>
          <img src={project.image.url} alt={project.image.description} />
        </Preview>

        {/* {project.description && (
          <Description>{project.description}</Description>
        )} */}
      </Container>
    </a>
  );
}
