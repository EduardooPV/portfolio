import React from "react";
import { Media } from "../MediaScreen";
import Link from "next/link";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaDev } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";

import {
  Container,
  Content,
  Figure,
  ContainerIcons,
  ContainerButton,
} from "./styles";

export function About() {
  return (
    <Container id="about">
      <Content>
        <TextSection
          tag="<h2>"
          tabIndex={0}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Quem sou?
        </TextSection>

        <p data-aos="fade-up" data-aos-duration="600">
          Muito prazer, me chamo Luiz Eduardo, tenho 24 anos e sou graduado em
          <span> Analise e desenvolvimento de sistemas - UNOPAR</span> e
          cursando pós gradução em <span>Full Stack - Descomplica</span>.
          Apaixonado pela arte de programar, decidi seguir carreira pelo ramo do
          desenvolvimento web, e me especializei em <span>Javascript</span> com
          <span> React.js</span> e em todo o seu eco sistema.
        </p>

        <ContainerIcons data-aos="fade-up" data-aos-duration="600">
          <a
            href="https://github.com/EduardooPV"
            target="_blank"
            rel="noreferrer"
            title="Icone Github"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-veltroni/"
            target="_blank"
            rel="noreferrer"
            title="Icone LinkedIn"
          >
            <AiFillLinkedin size={35} />
          </a>
          <a
            href="mailto:eduardoveltroni@hotmail.com"
            target="_blank"
            rel="noreferrer"
            title="Icone E-mail"
          >
            <HiOutlineMail size={40} />
          </a>
          <a
            href="https://dev.to/eduardoopv"
            target="_blank"
            rel="noreferrer"
            title="Icone blog Dev.to"
          >
            <FaDev size={29} />
          </a>
          <a
            href="/CV-Luiz-Eduardo-Front-End.pdf/"
            download="CV-Luiz-Eduardo-Front-End"
            title="Icone download curriculo"
          >
            <BiCloudDownload size={40} />
          </a>
        </ContainerIcons>

        <ContainerButton>
          <Link href="/projetos" passHref>
            <a data-aos="fade-up" data-aos-duration="600">
              <ButtonGeneric>Meus projetos</ButtonGeneric>
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
