import styled from "styled-components";
import c from "./pallete.json";

export const Container = styled.main`
  max-width: 1120px;

  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin-top: 50px;

    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    color: ${c.heading};

    @media (min-width: 768px) {
      font-size: 48px;
      line-height: 58px;
    }
  }

  span {
    font-size: 0.875rem;
    line-height: 1.063rem;
  }

  img {
    display: block;
    width: 100%;
    max-height: 300px;
    object-fit: fill;
    border-radius: 10px;
  }
`;

export const Infos = styled.ul`
  margin: 24px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;

  list-style: none;

  li:first-child {
    text-transform: capitalize;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${c.info};
  }
`;

export const ContentPost = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;

  color: ${c.heading};

  @media (min-width: 768px) {
    grid-template-columns: 1fr 250px;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 300px;
  }

  > div:first-child {
    margin-top: 1rem;
    padding: 0 1rem;

    border-radius: 10px;
    background: #181a1d;
  }

  h2 {
    margin: 3rem 0 1rem 0;
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
    margin: 1rem 0 0 1.1rem;
    list-style-type: square;
  }

  pre {
    background: rgb(63, 63, 63);
    font-size: 14px;
    padding: 1rem;
    border-radius: 4px;
    white-space: pre-line;
  }

  a {
    color: ${c.info};
    transition: color 0.1s;

    :hover {
      color: ${c.white};
    }
  }
`;
