import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

export const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    width: 100%;
    color: ${c.white};
    font-size: ${f.h5.fontSize};
    line-height: ${f.h5.lineHeight};
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const Preview = styled.div`
  img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center top;
  }
`;

export const Description = styled.div`
  margin: 10px 0;

  display: block;
  flex: 1;
  text-align: center;
  color: ${c.neutral200};
  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  a {
    flex: 1;
    min-width: max-content;
    padding: 8px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    background: transparent;

    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;

    transition: filter 0.2s;

    color: ${c.primary300};
    border: 1px solid ${c.primary300};

    svg {
      font-size: 25px;
      stroke-width: 1;
    }

    :hover {
      filter: brightness(0.8);
    }

    :active {
      background: ${c.primary400};
    }
  }
`;
