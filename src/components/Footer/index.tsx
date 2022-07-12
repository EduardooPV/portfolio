import React from "react";
import { Container, Content } from "./styles";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaDev } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <a
            href="https://www.linkedin.com/in/luiz-veltroni/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={25} />
            LinkedIn
          </a>
        </div>

        <div>
          <a
            href="mailto:eduardoveltroni@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={25} />
            E-mail
          </a>
        </div>

        <div>
          <a href="https://dev.to/eduardoopv" target="_blank" rel="noreferrer">
            <FaDev size={25} />
            Dev.to
          </a>
        </div>

        <div>
          <a
            href="/CV-Luiz-Eduardo-Front-End.pdf/"
            download="CV-Luiz-Eduardo-Front-End"
          >
            <BiCloudDownload size={25} />
            Curriculo
          </a>
        </div>

        <span>Copyright © 2022 - Luiz Eduardo Prado Veltroni</span>
      </Content>
    </Container>
  );
}
