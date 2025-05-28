import React from "react";

import { TextSection } from "../TextSection";
import { skillsIcon } from "../../utils/skillsIcon";

import { Container, Content } from "./styles";

export function Skills() {
  return (
    <Container>
      <TextSection tabIndex={0} data-aos="fade-up" data-aos-duration="400">
        Conhecimento
      </TextSection>

      <Content>
        {skillsIcon.slice(0, 5).map((icon) => (
          <div key={icon.title}>
            <img
              src={`./assets/skills/${icon.src}`}
              alt={icon.title}
              title={icon.title}
              loading="lazy"
            />

            <p>{icon.title}</p>
          </div>
        ))}
      </Content>
      <Content>
        {skillsIcon.slice(10, 15).map((icon) => (
          <div key={icon.title}>
            <img
              src={`./assets/skills/${icon.src}`}
              alt={icon.title}
              title={icon.title}
              loading="lazy"
            />

            <p>{icon.title}</p>
          </div>
        ))}
      </Content>
    </Container>
  );
}
