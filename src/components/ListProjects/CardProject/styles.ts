import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

export const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  border: 1px solid ${c.neutral400};
  border-radius: 4px;
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    color: ${c.white};
    font-size: ${f.h5.fontSize};
    line-height: ${f.h5.lineHeight};
    font-weight: bold;
    text-transform: capitalize;
  }

  span {
    color: ${c.neutral200};
    font-family: montserrat, sans-serif;
    font-size: ${f.caption.fontSize};
    line-height: ${f.caption.lineHeight};
  }
`;

export const Preview = styled.div`
  padding-top: 18px;
  border-top: 1px solid ${c.neutral500};

  img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center top;
  }
`;

export const Description = styled.div`
  display: block;
  flex: 1;
  color: ${c.neutral200};
  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
`;

export const Footer = styled.footer`
  display: flex;
  gap: 20px;

  a:first-child {
    width: 100%;
    padding: 8px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    color: ${c.black};
    background-color: ${c.primary300};
    text-decoration: none;
    border-radius: 4px;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }

    :active {
      background: ${c.primary400};
    }
  }

  a:last-child {
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${c.primary300};
    border: 1px solid ${c.primary300};
    border-radius: 4px;
    transition: 0.2s;
    svg {
      font-size: 25px;
    }

    :hover {
      filter: brightness(0.7);
    }
  }
`;
