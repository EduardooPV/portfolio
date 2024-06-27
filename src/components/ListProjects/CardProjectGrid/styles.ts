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

export const Tags = styled.div`
  display: flex;
  gap: 10px;

  p {
    width: fit-content;
    padding: 6px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    opacity: 0.9;
  }
`;

export const Description = styled.div`
  margin: 10px 0;

  display: block;
  flex: 1;
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

  a:first-child {
    color: ${c.black};
    background-color: ${c.primary300};
  }

  a:last-child {
    color: ${c.primary300};
    border: 1px solid ${c.primary300};
  }
`;
