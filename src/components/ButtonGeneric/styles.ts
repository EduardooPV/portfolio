import styled from "styled-components";
import c from '../../styles/pallete.json'
import f from '../../styles/typography.json'
import { PropsStyled } from "./interface";

export const Container = styled.button<PropsStyled>`
  width: 100%;
  max-width: 400px;
  padding: 5px 20px;

  background: ${props => props.types ? 'transparent' : `${c.primary300}`};
  border: ${props => props.types ? `1px solid ${c.primary300}` : 0};

  color:  ${props => props.types ? `${c.white}` : `${c.neutral700}`};
  font-family: "Montserrat", sans-serif;
  font-size: ${f.paragraphLarge.fontSize};
  line-height: ${f.paragraphLarge.lineHeight};

  border-radius: 2px;
`
