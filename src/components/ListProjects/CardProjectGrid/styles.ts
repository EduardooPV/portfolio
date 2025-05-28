import styled from "styled-components";

import c from "../../../styles/pallete.json";
import f from "../../../styles/typography.json";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.a<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  position: relative;
  overflow: hidden;

  border: 1px solid ${c.neutral600};
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  text-decoration: none;

  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};

  @media (min-width: 768px) {
    border: 1px solid ${c.neutral600};

    :hover {
      background: ${c.neutral600};
    }
  }
`;

export const Header = styled.header`
  font-family: montserrat, sans-serif;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 2rem;
  align-items: center;

  padding: 16px 20px;

  background: ${c.neutral600};

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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
  padding: 8px;

  img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center top;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;

  p {
    margin: 0;
  }

  img {
    width: 22px;
    height: 22px;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 768px) {
    gap: 1rem;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Description = styled.div`
  padding: 0 20px 20px 20px;

  display: block;
  flex: 1;
  color: ${c.neutral200};
  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
  text-align: justify;
`;

export const IsNotActive = styled.span`
  color: ${c.error} !important;
  border: 1px solid ${c.error};
  padding: 2px 10px;
  border-radius: 4px;
`;
