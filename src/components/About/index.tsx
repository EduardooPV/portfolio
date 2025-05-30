import React, { useRef } from "react";
import { Media } from "../MediaScreen";
import Link from "next/link";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

import { Container, Content, Figure, ContainerButton } from "./styles";
import { Accordion } from "../Accordion";
import { AccordionProps } from "../Accordion/interface";

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

  const accordionItems = [
    {
      title: "Quem sou",
      content: (
        <div>
          <p>
            Sou <span>desenvolvedor web</span>, apaixonado por transformar
            ideias em experiências digitais.
          </p>
          <p>
            Atuo com foco em <span>tecnologias modernas</span> como TypeScript,
            React, Next.js e WordPress — sempre buscando entregar soluções{" "}
            <span>eficientes, seguras e visualmente atrativas</span>.
          </p>
        </div>
      ),
    },
    {
      title: "Experiências",
      content: (
        <div>
          <p>
            Ao longo da minha jornada, tive a oportunidade de atuar em uma
            agência de marketing digital, onde desenvolvi{" "}
            <span>
              sites otimizados para SEO, com foco em performance e usabilidade
            </span>
            .
          </p>
          <p>
            Atualmente, trabalho em uma corretora nacional, onde contribuo na
            criação de{" "}
            <span>
              plataformas robustas, escaláveis e com foco total na experiência
              do usuário
            </span>
            .
          </p>
        </div>
      ),
    },
    {
      title: "Formação",
      content: (
        <div>
          <p>
            Sou formado em <span>ADS</span> (Análise e Desenvolvimento de
            Sistemas) pela <span>UNOPAR</span> (Universidade do Norte do
            Paraná).
          </p>
        </div>
      ),
    },
    {
      title: "Especialidades",
      content: (
        <div>
          <p>
            Posso te ajudar a tirar sua ideia do papel e transformá-la em um{" "}
            <span>site incrível e funcional</span>, seja para um{" "}
            <span>negócio local, uma loja virtua</span>.
          </p>
          <p>
            Tenho experiência em criar desde{" "}
            <span>landing pages de alta conversão</span> até{" "}
            <span>e-commerces profissionais</span>.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Container id="about">
      <Content>
        <TextSection tabIndex={0} data-aos="fade-up" data-aos-duration="400">
          Sobre mim
        </TextSection>

        <Media lessThan="lg" className="figure-mobile">
          <Figure data-aos="fade-right" data-aos-duration="600">
            <img
              src="/assets/person-mobile.png"
              alt="Fotografia do Desenvolvedor"
              loading="lazy"
            />
          </Figure>
        </Media>

        <div data-aos="fade-up" data-aos-duration="600">
          <Accordion items={accordionItems} />
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
            src="/assets/person-desktop.png"
            alt="Fotografia do Desenvolvedor"
            loading="lazy"
          />
        </Figure>
      </Media>
    </Container>
  );
}
