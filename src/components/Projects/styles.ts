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
`;

export const Content = styled.div`
  width: 100%;

  margin: 4rem 0 2rem 0;

  display: flex;
  flex-direction: column;

  font-family: "Montserrat", sans-serif;

  @media (min-width: 768px) {
    height: 100vh;
    max-height: 400px;
    position: relative;
  }
`;

export const CardUIUX = styled.div`
  max-width: 640px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  background: ${c.neutral500};
  border: 1px solid ${c.neutral200};

  @media (min-width: 768px) {
    padding: 40px;
    flex-direction: row;

    position: absolute;

    top: 0;
    left: 0;
  }

  > div:first-child {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0px;

    img {
      max-width: 40px;
      margin: 0 auto;

      @media (min-width: 768px) {
        max-width: 70px;
      }
    }

    button {
      width: 150px;
      color: ${c.black};
      background: ${c.primary300};
      border-radius: 2px;
      border: none;
      padding: 10px 20px;

      font-size: ${t.paragraphLarge.fontSize};
    }

    @media (min-width: 768px) {
      gap: 30px;
    }
  }

  > div:last-child {
    p {
      font-size: ${t.h3.fontSize};
      font-weight: ${t.h2.fontWeight.bold};
      color: ${c.white};

      word-break: break-all;

      margin-bottom: 10px;
    }

    span {
      font-size: ${t.paragraphSmall.fontSize};
      line-height: ${t.paragraphSmall.lineHeight};
      color: ${c.neutral200};
    }

    @media (min-width: 768px) {
      p {
        font-size: ${t.h2.fontSize};
      }

      span {
        font-size: ${t.paragraphLarge.fontSize};
        line-height: ${t.paragraphLarge.lineHeight};
      }
    }
  }
`;

export const CardDev = styled.div`
  max-width: 640px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  background: ${c.neutral500};
  border: 1px solid ${c.neutral200};

  @media (min-width: 768px) {
    padding: 40px;
    flex-direction: row;

    position: absolute;

    right: 0;
    bottom: 0;
  }

  > div:first-child {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0px;

    img {
      max-width: 40px;
      margin: 0 auto;

      @media (min-width: 768px) {
        max-width: 70px;
      }
    }

    button {
      width: 150px;
      color: ${c.black};
      background: ${c.primary300};
      border-radius: 2px;
      border: none;
      padding: 10px 20px;

      font-size: ${t.paragraphLarge.fontSize};
    }
    @media (min-width: 768px) {
      gap: 30px;
    }
  }

  > div:last-child {
    p {
      font-size: ${t.h3.fontSize};
      font-weight: ${t.h2.fontWeight.bold};
      color: ${c.white};

      word-break: break-all;

      margin-bottom: 10px;
    }

    span {
      font-size: ${t.paragraphSmall.fontSize};
      line-height: ${t.paragraphSmall.lineHeight};
      color: ${c.neutral200};
    }

    @media (min-width: 768px) {
      p {
        font-size: ${t.h2.fontSize};
      }

      span {
        font-size: ${t.paragraphLarge.fontSize};
        line-height: ${t.paragraphLarge.lineHeight};
      }
    }
  }
`;
