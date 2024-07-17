import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaDev } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <div>
            <a
              href="https://github.com/EduardooPV"
              target="_blank"
              rel="noreferrer"
              title="Icone Github"
              onClick={() =>
                useAnalyticsEventTracker("Footer", "click", "github-icon")
              }
            >
              <AiFillGithub size={30} />
              Github
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/luiz-veltroni/"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                useAnalyticsEventTracker("Footer", "click", "linkedin-icon")
              }
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
              onClick={() =>
                useAnalyticsEventTracker("Footer", "click", "email-icon")
              }
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
              onClick={() =>
                useAnalyticsEventTracker("Footer", "click", "devto-icon")
              }
            >
              <FaDev size={25} />
              Dev.to
            </a>
          </div>

          <div>
            <a
              href="/CV-Luiz-Eduardo-Front-End.pdf/"
              download="CV-Luiz-Eduardo-Front-End"
              onClick={() =>
                useAnalyticsEventTracker("Footer", "click", "curriculo")
              }
            >
              <BiCloudDownload size={25} />
              Curriculo
            </a>
          </div>
        </div>

        <span>Copyright © 2022 - Luiz Eduardo Prado Veltroni</span>
      </Content>
    </Container>
  );
}
