import React from "react";
import { Container, Content } from "./styles";
import { CardProject } from "./CardProject";
import { TextSection } from "../TextSection";

import { ListProjects } from "./types";

export function ListProjects({ projects }: ListProjects) {
  return (
    <Container
      data-aos="fade-down"
      data-aos-offset="20"
      data-aos-duration="800"
      data-aos-delay="800"
    >
      <TextSection tag="<h1>" tabIndex={0}>
        Projetos
      </TextSection>

      <Content>
        {projects?.map((project) => (
          <>
            <CardProject props={project} key={project.slug} />
          </>
        ))}
      </Content>
    </Container>
  );
}
