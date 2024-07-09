import React, { useState } from "react";

import { TextSection } from "../TextSection";

import { Container, Content } from "./styles";

export function Skills() {
  const skillsIcon = [
    { src: "javascript.svg", title: "Javascript" },
    { src: "typescript.svg", title: "Typescript" },
    { src: "reactjs.svg", title: "React.js" },
    { src: "nextjs.svg", title: "Next.js" },
    { src: "nodejs.svg", title: "Node.js" },
    { src: "deco.png", title: "Deco" },
    { src: "tailwindcss.svg", title: "Tailwindcss" },
    { src: "git.svg", title: "Git" },
    { src: "storybook.png", title: "Storybook" },
    { src: "vercel.svg", title: "Vercel" },
    { src: "wordpress.svg", title: "Wordpress" },
    { src: "figma.svg", title: "Figma" },
  ];

  return (
    <Container>
      <TextSection
        tag="<h2>"
        tabIndex={0}
        data-aos="fade-up"
        data-aos-duration="400"
      >
        Conhecimento
      </TextSection>

      <Content>
        {skillsIcon.map((icon) => (
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
