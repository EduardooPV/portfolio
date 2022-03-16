import React, { useState } from "react";
import Image from "next/image";
import { TextSection } from "../TextSection";
import { Container, ContainerCard, ModalHover } from "./styles";

export function Skills() {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);

  return (
    <Container>
      <TextSection tag="<h2>">Conhecimento</TextSection>

      <ContainerCard>
        <div
          onMouseEnter={() => setHoverOne(true)}
          onMouseLeave={() => setHoverOne(false)}
        >
          <Image
            src="/assets/icon-skill3.svg"
            alt="Icon UI/UX"
            layout="fixed"
            width="60"
            height="60"
          />
          <p>UI/UX</p>
          <ModalHover
            style={hoverOne == true ? { opacity: 1 } : { height: "100px" }}
          >
            <div>
              <Image
                src="/assets/icon-skill3.svg"
                alt="Icon UI/UX"
                layout="fixed"
                width="60"
                height="60"
              />
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
            </div>
          </ModalHover>
        </div>
        <div
          onMouseEnter={() => setHoverTwo(true)}
          onMouseLeave={() => setHoverTwo(false)}
        >
          <Image
            src="/assets/icon-skill.svg"
            alt="Icon UI/UX"
            layout="fixed"
            width="60"
            height="60"
          />
          <p>Implemetação</p>
          <ModalHover
            style={hoverTwo == true ? { opacity: 1 } : { height: "100px" }}
          >
            <div>
              <Image
                src="/assets/icon-skill.svg"
                alt="Icon UI/UX"
                layout="fixed"
                width="60"
                height="60"
              />
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
            </div>
          </ModalHover>
        </div>
        <div
          onMouseEnter={() => setHoverThree(true)}
          onMouseLeave={() => setHoverThree(false)}
        >
          <Image
            src="/assets/icon-skill2.svg"
            alt="Icon UI/UX"
            layout="fixed"
            width="60"
            height="60"
          />
          <p>Multiplataforma</p>
          <ModalHover
            style={hoverThree == true ? { opacity: 1 } : { height: "100px" }}
          >
            <div>
              <Image
                src="/assets/icon-skill2.svg"
                alt="Icon UI/UX"
                layout="fixed"
                width="60"
                height="60"
              />
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
              <p>ASDASDASDAS</p>
            </div>
          </ModalHover>
        </div>
      </ContainerCard>
    </Container>
  );
}
