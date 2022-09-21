import React from "react";
import { Container, Header, Description, Footer } from "./styles";
import { AiOutlineEye, AiOutlineStar, AiFillGithub } from "react-icons/ai";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardProps } from "./types";
import Link from "next/link";

export function CardProject({ props, loading }: CardProps) {
  return (
    <Container>
      {loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div>
            <Skeleton count={1} height={40} />
          </div>
          <Skeleton count={1} height={110} />
        </SkeletonTheme>
      ) : (
        <>
          <Header>
            <div>
              <p>{props.name.replace(/-/g, " ")}</p>

              <div>
                <span>
                  <AiOutlineEye color="#F89D24" />
                  {props.watchers}
                </span>

                <span>
                  <AiOutlineStar color="#F89D24" />
                  {props.stargazers_count}
                </span>
              </div>
            </div>

            <span>
              Criado em:{" "}
              {new Date(props.created_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </Header>

          <Description>{props.description}</Description>
        </>
      )}

      <Footer>
        <Link href={props.homepage} passHref>
          <a target="_blank" rel="noreferrer">
            Visualizar site
          </a>
        </Link>
        <Link href={props.html_url}>
          <a target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </Link>
      </Footer>
    </Container>
  );
}
