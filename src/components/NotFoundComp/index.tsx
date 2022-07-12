import React from "react";
import { Container } from "./styles";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export function NotFoundComp() {
  const { asPath } = useRouter();

  return (
    <Container>
      {asPath === "/projetos" || asPath === "/contato" ? (
        <>
          <p>Página em construção</p>
          <p>Volte outro dia!!</p>

          <div>
            <Image src="/assets/build.svg" layout="fill" objectFit="contain" />
          </div>
        </>
      ) : (
        <>
          <p>Ops... nada por aqui</p>

          <div>
            <Image src="/assets/404.svg" layout="fill" objectFit="contain" />
          </div>
        </>
      )}

      <Link href="/" passHref>
        <a>
          <AiOutlineArrowLeft />
          Voltar para o início
        </a>
      </Link>
    </Container>
  );
}
