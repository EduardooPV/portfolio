import styled from "styled-components";
import f from "../../styles/typography.json";
import c from "../../styles/pallete.json";

export const Container = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${c.white};
    font-family: montserrat, sans-serif;
    font-size: ${f.h3.fontSize};
    line-height: ${f.h3.lineHeight};
  }

  div {
    width: 100vw;
    height: 40vh;
    position: relative;
    display: block;

    @media (min-width: 768px) {
      width: 70vw;
      height: 50vh;
    }
  }

  a {
    font-family: montserrat, sans-serif;
    font-size: ${f.h4.fontSize};
    color: ${c.white};
    transition: all 0.2;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
