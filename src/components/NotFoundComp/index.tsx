import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineArrowLeft } from "react-icons/ai";

import { Container } from "./styles";
import { ButtonGeneric } from "../ButtonGeneric";

export function NotFoundComp() {
  return (
    <Container>
      <>
        <p>Ops... nada por aqui</p>

        <div>
          <Image src="/assets/404.svg" layout="fill" objectFit="contain" />
        </div>
      </>

      <Link href="/" passHref>
        {/* <a>
          <AiOutlineArrowLeft />
          Voltar para o início
        </a> */}

        <ButtonGeneric>
          {" "}
          <AiOutlineArrowLeft size={20}/>
          Voltar para o início{" "}
        </ButtonGeneric>
      </Link>
    </Container>
  );
}
