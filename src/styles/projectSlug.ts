import styled from "styled-components";

import f from "./typography.json";
import c from "../styles/pallete.json";

export const Container = styled.main`
  max-width: 1240px;

  margin: 0 auto;
  padding: 40px 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 400px;

    align-items: start;
  }
`;

export const Section = styled.section`
  z-index: 2;
  > div {
    padding: 2rem;

    border-radius: 10px;
    background: ${c.neutral600};
  }

  h3 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 28px;
    line-height: 140%;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 140%;
    }
  }

  p {
    margin: 1rem 0;
    font-size: 16px;
    line-height: 28px;
    word-wrap: break-word;
  }

  li {
    margin: 1rem 0 1rem 1.1rem;
    list-style-type: square;
  }

  pre {
    background: #37393c;
    font-size: 14px;
    padding: 1rem;
    border-radius: 4px;
    white-space: pre-line;
  }

  a {
    color: ${c.white};
    transition: opacity 0.1s;

    :hover {
      opacity: 0.7;
    }
  }

  img {
    display: block;
    width: 100%;
    max-height: fit-content;
    object-fit: contain;
    border-radius: 10px;
  }
`;

export const Aside = styled.aside`
  padding: 1rem;

  position: static;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 10px;
  background: ${c.neutral600};

  z-index: 99;

  @media (min-width: 1024px) {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }

  > span {
    color: ${c.neutral100};
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
  }

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      padding: 6px 20px;
    }

    > p {
      color: ${c.neutral200};
      font-weight: bold;
      font-size: ${f.paragraphLarge.fontSize};
      line-height: ${f.paragraphLarge.lineHeight};
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    a {
      font-size: ${f.paragraphLarge.fontSize};
      line-height: ${f.paragraphLarge.lineHeight};
      color: ${c.neutral200};
      transition: all 0.2s;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.2rem;

      :hover {
        color: ${c.white};
      }
    }
  }
`;
