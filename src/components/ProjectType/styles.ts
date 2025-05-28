import styled from "styled-components";

import c from "../../styles/pallete.json";

export const Tag = styled.span<{ color: string }>`
  width: fit-content;
  display: inline-block;
  color: ${({ color }) => color} !important;
  border-radius: 999px;
  background-color: ${c.neutral600};
  padding: 0px 12px;
  border: 1px solid ${({ color }) => color};
  transition: all 0.2s ease-in-out;

  font-size: 11px !important;

  :hover {
    background-color: ${({ color }) => color}22;
  }
`;
