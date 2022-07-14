import React from "react";
import { Container, Header, Description, Footer } from "./styles";
import { AiOutlineEye, AiOutlineStar, AiFillGithub } from "react-icons/ai";

interface CardProps {
  props: {
    name: string;
    homepage: string;
    created_at: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    watchers: string;
  };
}

export function CardProject(props: CardProps) {
  return (
    <Container>
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
