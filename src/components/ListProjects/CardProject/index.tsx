import React from "react";
import { Container, Header, Description, Footer } from "./styles";
import { AiOutlineEye, AiOutlineStar, AiFillGithub } from "react-icons/ai";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardProps } from "./types";

export function CardProject(props: CardProps) {
  return (
    <Container >
      {props.loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div>
            <Skeleton count={1} height={25} />
            <Skeleton count={1} height={25} />
          </div>
          <Skeleton count={1} height={15} />
          <Skeleton count={5} height={20} />
        </SkeletonTheme>
      ) : (
        <>
          <Header>
            <div>
              <p>{props.props.name.replace(/-/g, " ")}</p>

              <div>
                <span>
                  <AiOutlineEye color="#F89D24" />
                  {props.props.watchers}
                </span>

                <span>
                  <AiOutlineStar color="#F89D24" />
                  {props.props.stargazers_count}
                </span>
              </div>
            </div>

            <span>
              Criado em:{" "}
              {new Date(props.props.created_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </Header>

          <Description>{props.props.description}</Description>
        </>
      )}

      <Footer>
        <a href={props.props.homepage} target="_blank" rel="noreferrer">
          Visualizar site
        </a>
        <a href={props.props.html_url} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </Footer>
    </Container>
  );
}
