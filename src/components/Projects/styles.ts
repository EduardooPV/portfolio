import styled from "styled-components";

import c from "../../styles/pallete.json";
import t from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 4rem 0;

  display: flex;
  flex-direction: column;

  font-family: "Montserrat", sans-serif;

  @media (min-width: 768px) {
    height: 100vh;
    max-height: 350px;
    position: relative;
  }
`;

export const CardUIUX = styled.div`
  max-width: 640px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${(props) => props.theme.colors.backgroundCards};
  border: 2px solid ${c.neutral200};

  path {
    fill: ${c.primary300};
  }

  @media (min-width: 768px) {
    padding: 40px;
    flex-direction: row;

    position: absolute;

    top: 0;
    left: 0;
  }

  > div {
    svg {
      max-width: 60px;
      margin: 0 auto;

      @media (min-width: 768px) {
        max-width: 70px;
      }
    }
  }

  span {
    font-size: ${t.paragraphSmall.fontSize};
    line-height: ${t.paragraphSmall.lineHeight};
    color: ${(props) => props.theme.colors.text};

    @media (min-width: 768px) {
      font-size: ${t.paragraphLarge.fontSize};
      line-height: ${t.paragraphLarge.lineHeight};
    }
  }
`;

export const CardDev = styled.div`
  max-width: 640px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${(props) => props.theme.colors.backgroundCards};
  border: 1px solid ${c.neutral200};

  path {
    fill: ${c.primary300};
  }

  @media (min-width: 768px) {
    padding: 40px;
    flex-direction: row;

    position: absolute;

    right: 0;
    bottom: 0;
  }

  > div {
    svg {
      max-width: 60px;
      margin: 0 auto;

      @media (min-width: 768px) {
        max-width: 70px;
      }
    }
  }

  span {
    font-size: ${t.paragraphSmall.fontSize};
    line-height: ${t.paragraphSmall.lineHeight};
    color: ${(props) => props.theme.colors.text};

    @media (min-width: 768px) {
      font-size: ${t.paragraphLarge.fontSize};
      line-height: ${t.paragraphLarge.lineHeight};
    }
  }
`;
