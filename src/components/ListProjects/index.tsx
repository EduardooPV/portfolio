import React from "react";
import { Container, Content } from "./styles";
import { CardProject } from "./CardProject";
import { TextSection } from "../TextSection";

import { ListProjects } from "./types";

export function ListProjects({ projects }: ListProjects) {
  return (
    <Container>
      <TextSection
        tag="<h1>"
        tabIndex={0}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="1200"
      >
        Projetos
      </TextSection>

      <Content data-aos="fade-up" data-aos-duration="600" data-aos-delay="1800">
        {projects?.map((project) => (
          <CardProject
            props={project}
            key={project.slug}
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="600"
            data-aos-delay="400"
          />
        ))}
      </Content>
    </Container>
  );
}
