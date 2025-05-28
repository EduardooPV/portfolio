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
        <span>
          Desenvolvedor Front-end, focado nas principais tecnologias do
          ecossistema do Javascript.
        </span>
      </Details>

      <Details>
        <p>Formação</p>
        <span>Formado em Analise e desenvolvimento de sistemas.</span>
      </Details>

      <Details>
        <p>Organização</p>
        <span>Web Developer | Warren Investimentos</span>
      </Details>
    </Container>
  );
}
