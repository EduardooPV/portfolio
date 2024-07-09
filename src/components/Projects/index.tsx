import React from "react";
import Link from "next/link";

import { ButtonGeneric } from "../ButtonGeneric";
import { TextSection } from "../TextSection";

import { Container, Content } from "./styles";
import { ProjectsProps } from "../../pages/projetos";
import { CardProjectGrid } from "../ListProjects/CardProjectGrid";

export function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <TextSection
        tag="<h2>"
        tabIndex={0}
        data-aos="fade-up"
        data-aos-duration="400"
      >
        Ultimos Projetos
      </TextSection>

      <Content>
        {projects.map((project) => (
          <CardProjectGrid
            project={project}
            key={project.title}
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="600"
            data-aos-delay="400"
            titleCenter={true}
          />
        ))}
      </Content>
      <Link href="/projetos" passHref>
        <a>
          <ButtonGeneric>Ver todos</ButtonGeneric>
        </a>
      </Link>
    </Container>
  );
}
