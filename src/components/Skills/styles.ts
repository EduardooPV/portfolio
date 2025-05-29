import styled from "styled-components";
import c from "../../styles/pallete.json";

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
  gap: 30px;
  position: relative;

  z-index: 2;

  @media (min-width: 768px) {
    gap: 60px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      filter: blur(8px);
      z-index: 0;
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    p,
    img {
      position: relative;
      z-index: 1;
    }

    p {
      position: absolute;
      bottom: 0;
      opacity: 0;
      color: ${c.info};
    }

    :hover {
      p {
        opacity: 1;
        bottom: -30px;
        color: ${c.white};
        transition: all 0.3s;
      }

      img {
        transform: scale(1.1);
        transition: all 0.4s;
      }

      &::before {
        opacity: 1;
      }
    }

    img {
      width: 60px;
      height: 60px;
      aspect-ratio: 1 / 1;
      border-radius: 20%;

      @media (min-width: 768px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
