import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 0px 20px 40px 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    grid-auto-flow: dense;
  }
`;

export const Content = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  grid-column: 2;

  p {
    color: ${c.neutral200};
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    text-align: center;
    margin-bottom: 1rem;

    > span {
      color: ${c.primary300};
      font-weight: bold;
    }
  }

  > div:first-child {
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    align-items: start;
    gap: 1rem;

    .figure-mobile {
      display: none;
    }

    p {
      text-align: left;
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row !important;
  gap: 2rem;

  a {
    line-height: 0;
    transition: all 0.2s;
    color: ${c.neutral200}!important;

    :hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }

    :active {
      color: ${c.white};
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
    justify-content: start;
  }
`;

export const Figure = styled.div`
  grid-column: 1;
  position: relative;
  display: flex;
  justify-content: center;

  z-index: 2;

  img {
    width: 80%;
    transition: all 0.4s ease;
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;

    img {
      width: 100%;
    }
  }
`;
