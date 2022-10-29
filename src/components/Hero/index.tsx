import React from "react";
import { Media } from "../MediaScreen";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import { Container, Content, Figure, ContainerButton } from "./styles";

export function Hero() {
  return (
    <>
      <Container id="hero">
        <Content>
          <TextSection
            tag="<h1>"
            tabIndex={0}
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Seja bem vindo
          </TextSection>

          <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
            Oii, muito bem vindo ao meu <span>portfolio</span>, desenvolvi esse
            projeto com o intuito de poder aplicar tudo que aprendi até hoje na
            minha carreira <i>(curta, porém carreira)</i> de{" "}
            <span>Desenvolvedor Front-end.</span> Sinta-se avontade para pegar
            algum insight ou usar como referencia.
          </p>

          <ContainerButton>
            <a
              href="#about"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="600"
            >
              <ButtonGeneric>Sobre mim</ButtonGeneric>
            </a>
          </ContainerButton>
        </Content>
        <Media greaterThan="sm">
          <Figure
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            <img src="/assets/ilustration.webp" alt="Ilustração" />
          </Figure>
        </Media>
      </Container>
    </>
  );
}
