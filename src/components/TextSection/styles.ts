import styled from "styled-components";
import c from '../../styles/pallete.json'
import f from '../../styles/typography.json'

export const Container = styled.main`
  width: fit-content;

  margin: 0 auto;
  padding: 1rem 0.5rem;
  position: relative;

  h1 { 
    position: relative;

    font-family: "Roboto", sans-serif;
    font-size: ${f.h1.fontSize};
    line-height: ${f.h1.lineHeight};
    color: ${c.neutral100};

    z-index: 1;

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0.2rem;
      width: 40%;
      height: 13px;
      border-radius: 50px;

      background: ${c.primary300};

      z-index: -1;
    }

    @media (min-width: 768px) {
      font-size: ${f.display1.fontSize};

      &::before {
        bottom: -0.2rem;
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
`
