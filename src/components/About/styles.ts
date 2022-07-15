import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 40px 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-auto-flow: dense;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  grid-column: 2;

  p {
    max-width: 500px;

    color: ${(props) => props.theme.colors.text};
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    text-align: center;

    > span {
      color: ${c.primary300};
    }
  }

  @media (min-width: 768px) {
    align-items: start;

    p {
      text-align: left;
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    line-height: 0;
    transition: all 0.2s;
    color: ${(props) => props.theme.colors.text};
    
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
  img {
    width: 100%;
  }
`;
