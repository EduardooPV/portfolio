import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  IconWrapper,
} from "./styles";

type AccordionData = {
  title: string;
  content: React.ReactNode;
};

const accordionItems: AccordionData[] = [
  {
    title: "Quem sou",
    content: (
      <p>
        Desenvolvedor Front-end com experiência em{" "}
        <span>sites, blogs, plataformas e ecommerces</span>, graduado em Análise
        e Desenvolvimento de Sistemas.
      </p>
    ),
  },
  {
    title: "Experiências",
    content: (
      <p>
        Desenvolvedor Front-end com experiência em{" "}
        <span>sites, blogs, plataformas e ecommerces</span>, graduado em Análise
        e Desenvolvimento de Sistemas.
      </p>
    ),
  },
  {
    title: "Formação",
    content: (
      <p>
        Ao longo da minha carreira, ajudei empresas e empreendedores a criarem
        sites profissionais, modernos e funcionais, sempre com{" "}
        <span>foco em desempenho, SEO e experiência do usuário</span>.
      </p>
    ),
  },
  {
    title: "Especialidades",
    content: (
      <p>
        Trabalho tanto com plataformas acessíveis como WordPress, ideais para
        quem quer agilidade e autonomia, quanto com tecnologias modernas como
        React e Next.js.
      </p>
    ),
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else if (activeIndex !== null) {
      setActiveIndex(null);

      setTimeout(() => {
        setActiveIndex(index);
      }, 400);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <AccordionContainer data-aos="fade-up" data-aos-duration="600">
      {accordionItems.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <AccordionItem key={index}>
            <AccordionHeader isOpen={isOpen} onClick={() => toggle(index)}>
              {item.title}
              <IconWrapper isOpen={isOpen}>
                <FiPlus />
              </IconWrapper>
            </AccordionHeader>
            <AccordionContent isOpen={isOpen}>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
};
