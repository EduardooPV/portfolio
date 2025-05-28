import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaDev } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          {/* <div>
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
              </div> */}

          <div>
            <a
              href="https://wa.me/5515981897613?text=Ol%C3%A1%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20um%20servi%C3%A7o."
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                useAnalyticsEventTracker("Footer", "click", "whatsapp")
              }
            >
              <IoLogoWhatsapp size={25} />
              Whatsapp
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
              <MdEmail size={25} />
              E-mail
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

          {/* <div>
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
            </div> */}
        </div>

        <span>
          Copyright © 2025 - Luiz Eduardo Prado Veltroni. Todos os direitos
          reservados.
        </span>
      </Content>
    </Container>
  );
}
