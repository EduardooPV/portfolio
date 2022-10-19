import styled from "styled-components";

import f from "./typography.json";

export const Container = styled.main`
  max-width: 1120px;

  margin: 0 auto;
  padding: 90px 20px;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.title};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 300px;
    }
  }
`;

export const Section = styled.section`
  > div {
    padding: 2rem;

    border-radius: 10px;
    background: ${(props) => props.theme.colors.backgroundPost};

    @media (min-width: 1024px) {
      margin-top: 1rem;
    }
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
    background: ${(props) => props.theme.colors.backgroundPrePost};
    font-size: 14px;
    padding: 1rem;
    border-radius: 4px;
    white-space: pre-line;
  }

  a {
    color: ${(props) => props.theme.colors.titlePost};
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
  height: fit-content;

  padding: 0 1rem 1rem;

  position: static;

  border-radius: 10px;
  background: ${(props) => props.theme.colors.backgroundPost};

  @media (min-width: 1024px) {
    margin-top: 1rem;

    position: sticky;
    top: 80px;
  }

  > p {
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.title};
    font-weight: bold;
    font-size: ${f.h5.fontSize};
  }

  > div {
    margin: 0.5rem 0;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    a {
      color: ${(props) => props.theme.colors.titlePost};
      transition: opacity 0.1s;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
