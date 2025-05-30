import styled from "styled-components";

import f from "../../styles/typography.json";
import c from "../../styles/pallete.json";

interface TagProps {
  $color: string;
  $hero: boolean;
}

export const Tag = styled.span<TagProps>`
  width: fit-content;
  display: inline-block;
  color: ${({ $color }) => $color} !important;
  border-radius: 999px;
  background-color: ${c.neutral600};
  padding: 0px 12px;
  border: 1px solid ${({ $color }) => $color};
  transition: all 0.2s ease-in-out;

  font-size: 11px !important;

  :hover {
    background-color: ${({ $color }) => $color}22;
  }
`;

export const TagHero = styled.span<TagProps>`
  width: 140px;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: ${f.paragraphSmall.fontSize};
  color: ${c.white};
  border-radius: 999px;
  padding: 8px 20px;
  border: 1px solid ${c.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  text-align: center;

  :hover {
    color: ${({ $color }) => $color};
    border: 1px solid ${({ $color }) => $color};
    background-color: ${({ $color }) => $color}22;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;
