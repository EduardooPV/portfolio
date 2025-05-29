import React, { useRef } from "react";
import { Media } from "../MediaScreen";
import Link from "next/link";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

import { Container, Content, Figure, ContainerButton } from "./styles";
import { Accordion } from "../Accordion";

export function About() {
  const figureRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = figureRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTransform = () => {
    const el = figureRef.current;
    if (el) {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <Container id="about">
      <Content>
        <TextSection tabIndex={0} data-aos="fade-up" data-aos-duration="400">
          Sobre mim
        </TextSection>

        <Media lessThan="lg" className="figure-mobile">
          <Figure data-aos="fade-right" data-aos-duration="600">
            <img
              src="/assets/person.png"
              alt="Fotografia do Desenvolvedor"
              loading="lazy"
            />
          </Figure>
        </Media>

        <div data-aos="fade-up" data-aos-duration="600">
          {/* <p>
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
          </p> */}
          <Accordion />
        </div>

        <ContainerButton data-aos="fade-up" data-aos-duration="600">
          <Link href="#projects" passHref>
            <a
              onClick={() =>
                useAnalyticsEventTracker("About", "click", "meus-projetos")
              }
            >
              <ButtonGeneric>Últimos projetos</ButtonGeneric>
            </a>
          </Link>
        </ContainerButton>
      </Content>
      <Media greaterThan="sm">
        <Figure
          data-aos="fade-right"
          data-aos-duration="600"
          ref={figureRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
        >
          <img
            src="/assets/person.png"
            alt="Fotografia do Desenvolvedor"
            loading="lazy"
          />
        </Figure>
      </Media>
    </Container>
  );
}
