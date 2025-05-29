import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.a<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;

  overflow: hidden;

  border: 1px solid ${c.neutral500};
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};

  text-decoration: none;

  :hover {
    background: ${c.neutral600};
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 768px) {
    grid-template-columns: minmax(300px, 600px) minmax(300px, 600px);
  }
`;

export const Preview = styled.div`
  width: 100%;

  display: flex;

  padding: 12px;

  z-index: 2;

  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding: 20px;
  }

  :hover {
    transform: scale(1.02);
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

  z-index: 2;
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 2rem;
  align-items: center;
  padding: 16px 20px;

  background: ${c.neutral600};

  p {
    color: ${c.white};
    font-size: ${f.h4.fontSize};
    line-height: ${f.h4.lineHeight};
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

export const Description = styled.div`
  margin: 20px;
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

export const Tags = styled.div`
  display: flex;
  gap: 10px;

  p {
    margin: 0;
  }
`;

export const IsNotActive = styled.span`
  color: ${c.error} !important;
  border: 1px solid ${c.error};
  padding: 2px 10px;
  border-radius: 4px;
`;
