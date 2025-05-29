import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.div`
  width: fit-content;

  padding: 0rem 0.5rem;
  position: relative;

  h3,
  h4 {
    position: relative;

    font-family: "Montserrat", sans-serif;
    font-size: ${f.h3.fontSize};
    line-height: ${f.h2.lineHeight};
    color: ${c.neutral300};
    filter: drop-shadow(0 0 30px rgba(252, 252, 252, 0.2));

    z-index: 1;

    /* &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0.3rem;
      left: 0;
      width: 40%;
      height: 8px;
      border-radius: 50px;

      background: ${c.white};
      z-index: -1;
    }

    @media (min-width: 768px) {
      font-size: ${f.h2.fontSize};
      line-height: ${f.h2.lineHeight};

      &::before {
        height: 10px;
        bottom: 0.4rem;
        right: 0;
      }
    } */
  }
`;
