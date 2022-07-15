import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaDev } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";

import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <a
            href="https://www.linkedin.com/in/luiz-veltroni/"
            target="_blank"
            rel="noreferrer"
            tabIndex={19}
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
            tabIndex={20}
          >
            <HiOutlineMail size={25} />
            E-mail
          </a>
        </div>

        <div>
          <a
            href="https://dev.to/eduardoopv"
            target="_blank"
            rel="noreferrer"
            tabIndex={21}
          >
            <FaDev size={25} />
            Dev.to
          </a>
        </div>

        <div>
          <a
            href="/CV-Luiz-Eduardo-Front-End.pdf/"
            download="CV-Luiz-Eduardo-Front-End"
            tabIndex={22}
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
