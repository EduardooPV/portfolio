import styled from "styled-components";

export const Item = styled.span`
  list-style: none;

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    transition: opacity 0.1s;

    font-size: 12px;

    :hover {
      opacity: 0.7;
    }

    @media(min-width: 768px) {
      font-size: 1rem;
    }
  }

  :last-child a {
    color: ${(props) => props.theme.colors.title};
  }
`;
