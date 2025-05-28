import React from "react";
import { Media } from "../MediaScreen";
import Link from "next/link";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

import { Container, Content, Figure, ContainerButton } from "./styles";

export function About() {
  return (
    <Container id="about">
      <Content>
        <TextSection tabIndex={0} data-aos="fade-up" data-aos-duration="400">
          Prazer, sou Luiz Eduardo
        </TextSection>

        <div data-aos="fade-up" data-aos-duration="600">
          <p>
            Desenvolvedor Front-end com experiência em{" "}
            <span>sites, blogs, plataformas e ecommerces </span>, graduado em
            Análise e Desenvolvimento de Sistemas.
          </p>
          <p>
            Ao longo da minha carreira, ajudei empresas e empreendedores a
            criarem sites profissionais, modernos e funcionais, sempre com{" "}
            <span>foco em desempenho, SEO e experiência do usuário</span>.
          </p>
          <p>
            Trabalho tanto com plataformas acessíveis como WordPress, ideais
            para quem quer agilidade e autonomia, quanto com tecnologias
            modernas como React e Next.js.
          </p>
        </div>

        <ContainerButton data-aos="fade-up" data-aos-duration="600">
          <Link href="/projetos" passHref>
            <a
              onClick={() =>
                useAnalyticsEventTracker("About", "click", "meus-projetos")
              }
            >
              <ButtonGeneric>Meus serviços</ButtonGeneric>
            </a>
          </Link>
        </ContainerButton>
      </Content>
      <Media greaterThan="sm">
        <Figure data-aos="fade-right" data-aos-duration="600">
          <img
            src="/assets/person.webp"
            alt="Homem com ficha técnica ao lado"
            loading="lazy"
          />
        </Figure>
      </Media>
    </Container>
  );
}
