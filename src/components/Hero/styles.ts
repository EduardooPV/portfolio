import styled from "styled-components";

import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  height: 100vh;

  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 3rem auto;

    color: ${c.neutral200};
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    text-align: center;

    > span {
      color: ${c.primary300};
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    align-items: end;

    p {
      margin: 3rem 0;
      text-align: right;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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

export const Figure = styled.div`
  img {
    width: 100%;
  }
`;
