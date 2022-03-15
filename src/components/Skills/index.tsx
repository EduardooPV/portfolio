import React from "react";
import Image from "next/image";
import { TextSection } from "../TextSection";
import { Container, ContainerCard } from "./styles";

export function Skills() {
  return (
    <Container>
      <TextSection tag="<h2>">Conhecimento</TextSection>

      <ContainerCard>
        <div>
          <Image
            src="/assets/icon-skill3.svg"
            alt="Icon UI/UX"
            layout="fixed"
            width="60"
            height="60"
          />
          <p>UI/UX</p>
        </div>
        <div>
          <Image
            src="/assets/icon-skill.svg"
            alt="Icon UI/UX"
            layout="fixed"
            width="60"
            height="60"
          />
          <p>Implemetação</p>
        </div>
        <div>
          <Image
            src="/assets/icon-skill2.svg"
            alt="Icon UI/UX"
            layout="fixed"
            width="60"
            height="60"
          />
          <p>Multiplataforma</p>
        </div>
      </ContainerCard>
    </Container>
  );
}
