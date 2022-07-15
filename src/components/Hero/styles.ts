import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const AnimationPresentation = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  background-color: #232222;
  z-index: 9999;

  animation: fade 4s both;

  @keyframes fade {
    0% {
      opacity: 1;
    }

    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      z-index: -1;
    }
  }

  textPath {
    font-size: 60px;
  }
`;

export const Container = styled.section`
  max-width: 1240px;
  height: 100vh;

  margin: 0 auto;
  padding: 60px 20px 0 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    max-width: 500px;
    margin: 3rem auto;

    color: ${(props) => props.theme.colors.text};
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    text-align: center;

    > span {
      color: ${c.primary300};
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
