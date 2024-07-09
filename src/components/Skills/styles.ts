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
  gap: 60px;

  @media (min-width: 768px) {
    padding: 100px 20px 120px 20px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    p {
      opacity: 0;
    }

    :hover {
      p {
        opacity: 1;
        transition: all 0.2s;
      }

      img {
        transform: scale(1.1);
        transition: all 0.2s;
      }
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;

      @media (min-width: 768px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
