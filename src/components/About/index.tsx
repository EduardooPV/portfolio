import React from "react";
import { Media } from "../MediaScreen";
import Link from "next/link";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";
import { AiFillLinkedin } from "react-icons/ai";
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
    <Container
      id="about"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="800"
    >
      <Content>
        <TextSection tag="<h2>" tabIndex={9}>
          Luiz Eduardo
        </TextSection>

        <p>
          lorem ipsum lorem ipsore color dolor asudhw
          <span> ai et dolor lorem </span>ipsumlorem ipsum lorem ipsore color
          dolor asudhw ai et dolor lorem ipsumlorem ipsum lorem ipsore color
          dolor <span>asudhw ai et dolor lorem ipsumlorem</span> ipsum lorem
          ipsore color dolor asudhw dolor asudhw ai et dolor lorem m ipsore
          color dolor asudhw <span>dolor asudhw</span> ai et dolor lorem
        </p>

        <ContainerIcons>
          <a
            href="https://www.linkedin.com/in/luiz-veltroni/"
            target="_blank"
            rel="noreferrer"
            tabIndex={10}
          >
            <AiFillLinkedin size={35} />
          </a>
          <a
            href="mailto:eduardoveltroni@hotmail.com"
            target="_blank"
            rel="noreferrer"
            tabIndex={11}
          >
            <HiOutlineMail size={40} />
          </a>
          <a
            href="https://dev.to/eduardoopv"
            target="_blank"
            rel="noreferrer"
            tabIndex={12}
          >
            <FaDev size={29} />
          </a>
          <a
            href="/CV-Luiz-Eduardo-Front-End.pdf/"
            download="CV-Luiz-Eduardo-Front-End"
            tabIndex={13}
          >
            <BiCloudDownload size={40} />
          </a>
        </ContainerIcons>

        <ContainerButton>
          <Link href="/projetos" passHref>
            <a tabIndex={14}>
              <ButtonGeneric invisible>Meus projetos</ButtonGeneric>
            </a>
          </Link>

          <Link href="/contato">
            <a tabIndex={15}>
              <ButtonGeneric>Entre em contato</ButtonGeneric>
            </a>
          </Link>
        </ContainerButton>
      </Content>
      <Media greaterThan="sm">
        <Figure>
          <img src="/assets/person.png" alt="Ilustração" />
        </Figure>
      </Media>
    </Container>
  );
}
