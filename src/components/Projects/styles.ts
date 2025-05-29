import styled from "styled-components";

export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  z-index: 2;

  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 100px 20px 120px 20px;
  }

  a {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 4rem 0;

  z-index: 2;

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  font-family: "Montserrat", sans-serif;
`;
