import styled from "styled-components";
import f from "../../styles/typography.json";

export const Container = styled.main`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-family: montserrat, sans-serif;
    font-size: ${f.h3.fontSize};
    line-height: ${f.h3.lineHeight};
    color: ${(props) => props.theme.colors.title};
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
    color: ${(props) => props.theme.colors.title};
    transition: all 0.2;

    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
