import React from "react";
import { Media } from "../MediaScreen";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import { Container, Content, Figure, ContainerButton } from "./styles";

export function Hero() {
  return (
    <>
      <Container id="hero" data-aos="fade-down" data-aos-duration="800">
        <Content>
          <TextSection tag="<h1>" tabIndex={0}>
            Seja bem vindo
          </TextSection>

          <p>
            lorem ipsum lorem ipsore color dolor asudhw
            <span> ai et dolor lorem </span>ipsumlorem ipsum lorem ipsore color
            dolor asudhw ai et dolor lorem ipsumlorem ipsum lorem ipsore color
            dolor <span>asudhw ai et dolor lorem ipsumlorem</span> ipsum lorem
            ipsore color dolor asudhw dolor asudhw ai et dolor lorem m ipsore
            color dolor asudhw <span>dolor asudhw</span> ai et dolor lorem{" "}
          </p>

          <ContainerButton>
            <a href="#about">
              <ButtonGeneric>Sobre mim</ButtonGeneric>
            </a>
          </ContainerButton>
        </Content>
        <Media greaterThan="sm">
          <Figure>
            <img src="/assets/ilustration.png" alt="Ilustração" />
          </Figure>
        </Media>
      </Container>
    </>
  );
}
