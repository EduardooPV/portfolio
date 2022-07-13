import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";
import { PropsStyled } from "./interface";

export const Container = styled.button<PropsStyled>`
  width: 100%;
  min-width: 250px;
  max-width: 400px;

  margin: 0 auto;
  padding: 5px 20px;

  background: ${(props) => (props.types ? "transparent" : `${c.primary300}`)};
  border: 2px solid ${c.primary300};

  color: ${(props) => (props.types ? c.primary300 : c.neutral500)};
  font-family: "Montserrat", sans-serif;
  font-size: ${f.paragraphLarge.fontSize};
  line-height: ${f.paragraphLarge.lineHeight};
  font-weight: ${f.paragraphLarge.fontWeight.bold};

  border-radius: 2px;

  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.types ? "transparent" : `${c.primary400}`)};
    color: ${(props) => (props.types ? c.primary400 : "")};
    border: 2px solid ${c.primary400};
  }

  &:active {
    color: ${(props) => (props.types ? c.primary300 : c.white)};
    background: ${(props) => (props.types ? "transparent" : `${c.primary500}`)};
    color: ${(props) => (props.types ? c.primary500 : "")};
    border: 2px solid ${c.primary500};
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;
