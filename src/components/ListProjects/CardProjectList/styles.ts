import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

export const Container = styled.div`
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  gap: 15px;

  border: 1px solid ${c.neutral400};
  border-radius: 4px;

  @media (min-width: 768px) {
    grid-template-columns: minmax(300px, 600px) minmax(300px, 600px);
  }
`;

export const Preview = styled.div`
  width: 100%;

  display: flex;

  padding-right: 18px;
  border-right: 1px solid ${c.neutral500};

  @media (max-width: 768px) {
    padding-right: 0px;
    padding-bottom: 18px;
    border-right: 0px;
    border-bottom: 1px solid ${c.neutral500};
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    > div {
      display: flex;
      gap: 10px;

      p {
        width: fit-content;
        padding: 6px;
        border-radius: 4px;
        color: #fff;
        font-weight: 500;
      }
    }
  }

  > p {
    color: ${c.white};
    font-size: ${f.h4.fontSize};
    line-height: ${f.h4.lineHeight};
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

export const Description = styled.div`
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

  @media (min-width: 768px) and (max-width: 1050px) {
    flex-direction: column;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }

  a {
    flex: 1;
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
