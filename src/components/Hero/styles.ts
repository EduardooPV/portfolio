import styled from "styled-components";

import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  height: 100vh;

  z-index: 2;

  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0.5rem;
  z-index: 2;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  z-index: 2;

  h1 {
    font-size: ${f.display1.fontSize};
    text-align: center;

    ::before {
      bottom: -0.3rem;
      left: 10%;
      @media (min-width: 768px) {
        bottom: 0.4rem;
        left: 0;
      }
    }
  }

  h4 {
    text-align: center;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    h1 {
      text-align: start;
    }

    h4 {
      text-align: start;
    }
    align-items: start;
    gap: 1rem;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0.5rem;

  a {
    width: 100%;
  }

  @media (min-width: 415px) {
    width: fit-content;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    justify-content: end;
  }
`;

// export const Figure = styled.div`
//   position: relative;

//   z-index: 2;

//   img {
//     width: 100%;
//   }
// `;
