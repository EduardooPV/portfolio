import React from "react";
import { Container, ContainerImage, Details } from "./styles";

export function AsidePerson() {
  return (
    <Container>
      <ContainerImage>
        <img
          src="https://github.com/EduardooPV.png"
          alt="Luiz Eduardo Prado Veltroni"
        />

        <p>Luiz Eduardo P. Veltroni</p>
      </ContainerImage>

      <Details>
        <p>Resumo</p>
        <span>Apaixonado por programação e amante de Scripts.</span>
      </Details>

      <Details>
        <p>Formação</p>
        <span>
          Analise e desenvolvimento de sistemasAnalise e desenvolvimento de
          sistemas
        </span>
      </Details>

      <Details>
        <p>Ocupação</p>
        <span>Web Developer | Rocky.Monks</span>
      </Details>
    </Container>
  );
}
