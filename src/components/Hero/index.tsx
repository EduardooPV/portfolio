import React from "react";
import { Media } from "../MediaScreen";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import { Container, Content, Figure, ContainerButton } from "./styles";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

export function Hero() {
  return (
    <>
      <Container id="hero">
        <Content>
          <TextSection
            tabIndex={0}
            data-aos="fade-up"
            data-aos-duration="600"
            h1
          >
            Seja bem vindo
          </TextSection>

          <section
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <p>
              Sou especialista em desenvolvimento web com foco em performance,
              design responsivo e{" "}
              <span>estratégias que geram resultados reais.</span>
            </p>
            <p>
              Tenho experiência criando e mantendo sites profissionais usando
              <span> WordPress, React.js e Next.js</span>.
            </p>
            <p>
              Se você busca um site moderno, rápido e que converta visitantes em
              clientes, está no lugar certo.
            </p>
          </section>

          <ContainerButton>
            <a
              href="#about"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="600"
              onClick={() =>
                useAnalyticsEventTracker("Hero", "click", "sobre-mim")
              }
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
