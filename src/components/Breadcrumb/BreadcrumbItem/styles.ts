import styled from "styled-components";
import c from "../../../styles/pallete.json";

export const Item = styled.span`
  list-style: none;

  a {
    color: ${c.neutral200};
    text-decoration: none;
    transition: opacity 0.1s;

    font-size: 12px;

    :hover {
      opacity: 0.7;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  :last-child a {
    color: ${c.white};
  }
`;
