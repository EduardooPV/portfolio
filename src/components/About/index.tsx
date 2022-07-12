import React from "react";
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
import { Media } from "../MediaScreen";

export function About() {
  return (
    <Container>
      <Content>
        <TextSection tag="<h2>">Luiz Eduardo</TextSection>

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
          >
            <AiFillLinkedin size={40} color="#C2BDBD" />
          </a>
          <a
            href="mailto:eduardoveltroni@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={40} color="#C2BDBD" />
          </a>
          <a href="https://dev.to/eduardoopv" target="_blank" rel="noreferrer">
            <FaDev size={30} color="#C2BDBD" />
          </a>
          <a
            href="/CV-Luiz-Eduardo-Front-End.pdf/"
            download="CV-Luiz-Eduardo-Front-End"
          >
            <BiCloudDownload size={40} color="#C2BDBD" />
          </a>
        </ContainerIcons>

        <ContainerButton>
          <ButtonGeneric invisible>Meus projetos</ButtonGeneric>

          <ButtonGeneric>Entre em contato</ButtonGeneric>
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
