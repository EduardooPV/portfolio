import React from "react";
import Link from "next/link";

import { ButtonGeneric } from "../ButtonGeneric";
import { TextSection } from "../TextSection";

import { Container, Content } from "./styles";
import { ProjectsProps } from "../../pages/projetos";
import { CardProjectResume } from "../ListProjects/CardProjectResume";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

export function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <TextSection tabIndex={0} data-aos="fade-up" data-aos-duration="400">
        Ultimos Projetos
      </TextSection>

      <Content>
        {projects.map((project) => (
          <CardProjectResume
            project={project}
            key={project.title}
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="600"
            data-aos-delay="400"
          />
        ))}
      </Content>
      <Link href="/projetos" passHref>
        <a
          onClick={() =>
            useAnalyticsEventTracker("Projects Home", "click", "ver-todos")
          }
          style={{ zIndex: 2 }}
        >
          <ButtonGeneric>Ver todos</ButtonGeneric>
        </a>
      </Link>
    </Container>
  );
}
