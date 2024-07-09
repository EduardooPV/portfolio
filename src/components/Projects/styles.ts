import styled from "styled-components";

import c from "../../styles/pallete.json";
import t from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 40px 20px 80px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

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

  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  font-family: "Montserrat", sans-serif;
`;