import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.div`
  width: fit-content;

  padding: 1rem 0.5rem;
  position: relative;

  h1,
  h2 {
    position: relative;

    font-family: "Roboto", sans-serif;
    font-size: ${f.h1.fontSize};
    line-height: ${f.h2.lineHeight};
    color: ${c.white};

    z-index: 1;

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0.3rem;
      left: 0;
      width: 40%;
      height: 8px;
      border-radius: 50px;

      background: ${c.primary300};
      z-index: -1;
    }

    @media (min-width: 768px) {
      font-size: ${f.display1.fontSize};
      line-height: ${f.display2.lineHeight};

      &::before {
        height: 10px;
        bottom: 0.4rem;
      }
    }
  }

  span {
    font-family: "Montserrat", sans-serif;
    font-size: ${f.caption.fontSize};
    font-style: italic;

    &:last-child {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
