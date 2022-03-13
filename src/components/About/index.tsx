import React from "react";
import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";
import { useWidth } from "../../utils/useWidth";

import { Container, Content, Figure, ContainerIcons, ContainerButton } from "./styles";

export function About() {
  const width = useWidth();

  return (
    <Container>
      <Content>
        <TextSection tag="<h2>">Luiz Eduardo</TextSection>

        <p>
          lorem ipsum lorem ipsore color dolor asudhw
          <span> ai et dolor lorem </span>ipsumlorem ipsum lorem ipsore color
          dolor asudhw ai et dolor lorem ipsumlorem ipsum lorem ipsore color
          dolor <span>asudhw ai et dolor lorem ipsumlorem</span> ipsum lorem
          ipsore color dolor asudhw dolor asudhw ai et dolor lorem m ipsore
          color dolor asudhw <span>dolor asudhw</span> ai et dolor lorem
        </p>

        <ContainerIcons>
          <a href="#" target="_blank">
            <img src="/assets/icon-linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="#" target="_blank">
            <img src="/assets/icon-email.svg" alt="Email" />
          </a>
          <a href="#" target="_blank">
            <img src="/assets/icon-devto.svg" alt="Dev.to" />
          </a>
          <a href="#" target="_blank">
            <img src="/assets/icon-download.svg" alt="Download Curriculo" />
          </a>
        </ContainerIcons>

        <ContainerButton>
          <ButtonGeneric invisible>Meus projetos</ButtonGeneric>

          <ButtonGeneric>Entre em contato</ButtonGeneric>
        </ContainerButton>
      </Content>
      {width >= 768 ? 
        <Figure>
          <img src="/assets/person.png" alt="Ilustração" />
        </Figure> 
      : null}
    </Container>
  );
}
