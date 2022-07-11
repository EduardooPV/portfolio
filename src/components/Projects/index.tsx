import React from "react";
import { ButtonGeneric } from "../ButtonGeneric";
import { Media } from "../MediaScreen";
import { TextSection } from "../TextSection";
import { Container, Content, CardUIUX, CardDev } from "./styles";

export function Projects() {
  return (
    <Container>
      <TextSection tag="h2">Projetos</TextSection>

      <Content>
        <CardUIUX>
          <div>
            <img
              src="/assets/project-uiux.svg"
              alt="Icone dos projetos feitos em UI/UX"
              aria-hidden="true"
            />

            <Media greaterThan="sm">
              <button>Ver projetos</button>
            </Media>
          </div>

          <div>
            <p>UI / UX</p>

            <span>
              Venha ver alguns projetos que eu realizei utilizando alguns
              conceitos de UI/UX
            </span>
          </div>
        </CardUIUX>

        <CardDev>
          <div>
            <img
              src="/assets/project-dev.svg"
              alt="Icone dos projetos feitos em UI/UX"
              aria-hidden="true"
            />

            <Media greaterThan="sm">
              <button>Ver projetos</button>
            </Media>
          </div>

          <div>
            <p>Implementação</p>

            <span>
              Venha ver alguns projetos implementados utilizando React.js e
              Next.js
            </span>
          </div>
        </CardDev>
      </Content>
      <Media at="sm">
        <ButtonGeneric>Ver projetos</ButtonGeneric>
      </Media>
    </Container>
  );
}
