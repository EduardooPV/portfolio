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
            <span>Desenvolvedor Front-End com 4 anos</span> de experiência
            focados no desenvolvimento web utilizando
            <span> JavaScript, React.js e Next.js.</span> Este portfólio foi
            criado para aplicar e demonstrar os conceitos que adquiri, além de
            compartilhar meu trabalho e inspiração. Sinta-se à vontade para
            explorar e entrar em contato.
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
            <img
              src="/assets/ilustration.webp"
              alt="Personagem flutuando com graficos envolta dele."
              loading="eager"
              decoding="async"
            />
          </Figure>
        </Media>
      </Container>
    </>
  );
}
