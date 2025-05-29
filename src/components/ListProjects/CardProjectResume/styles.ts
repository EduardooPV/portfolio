import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  cursor: pointer;

  border: 1px solid ${c.neutral600};
  border-radius: 20px;

  transition: all 0.3s ease-in-out;

  :hover {
    background: ${c.neutral600};
    transition: all 0.1s ease-in-out;

    img {
      transform: scale(1.02);
    }
  }
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 2rem;
  align-items: center;

  padding: 16px 20px;

  background: ${c.neutral600};

  p {
    color: ${c.white};
    font-size: ${f.h5.fontSize};
    line-height: ${f.h5.lineHeight};
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
  }

  span {
    color: ${c.neutral200};
    font-family: montserrat, sans-serif;
    font-size: ${f.caption.fontSize};
    line-height: ${f.caption.lineHeight};
  }
`;

export const Preview = styled.div`
  padding: 20px;

  img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.3s ease-in-out;
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
