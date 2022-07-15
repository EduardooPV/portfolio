import React from "react";
import Link from "next/link";
import { Media } from "../MediaScreen";

import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import {
  AnimationPresentation,
  Container,
  Content,
  Figure,
  ContainerButton,
} from "./styles";

export function Hero() {
  return (
    <>
      <AnimationPresentation>
        <svg
          width="100%"
          height="100%"
          viewBox="30 -50 600 500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path id="path">
            <animate
              attributeName="d"
              from="m0,110 h0"
              to="m0,110 h1100"
              dur="5s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </path>
          <text fill="#F89D24">
            <textPath xlinkHref="#path">Seja bem vindo!</textPath>
          </text>
        </svg>
      </AnimationPresentation>
      <Container id="hero">
        <Content>
          <TextSection tag="<h1>" tabIndex={6}>
            Seja bem vindo
          </TextSection>

          <p>
            lorem ipsum lorem ipsore color dolor asudhw
            <span> ai et dolor lorem </span>ipsumlorem ipsum lorem ipsore color
            dolor asudhw ai et dolor lorem ipsumlorem ipsum lorem ipsore color
            dolor <span>asudhw ai et dolor lorem ipsumlorem</span> ipsum lorem
            ipsore color dolor asudhw dolor asudhw ai et dolor lorem m ipsore
            color dolor asudhw <span>dolor asudhw</span> ai et dolor lorem{" "}
          </p>

          <ContainerButton>
            <Link href="/contato" passHref>
              <a tabIndex={7}>
                <ButtonGeneric>Entre em contato</ButtonGeneric>
              </a>
            </Link>

            <a href="#about" tabIndex={8}>
              <ButtonGeneric invisible>Sobre mim</ButtonGeneric>
            </a>
          </ContainerButton>
        </Content>
        <Media greaterThan="sm">
          <Figure>
            <img src="/assets/ilustration.png" alt="Ilustração" />
          </Figure>
        </Media>
      </Container>
    </>
  );
}
