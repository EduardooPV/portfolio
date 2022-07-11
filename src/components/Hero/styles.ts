import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const BackHome = styled.div`
  position: fixed;
  right: 5%;
  bottom: 1rem;

  z-index: 2;
  
  &:hover {
    animation: toping 0.2s alternate infinite;

    @keyframes toping {
      from {
        transform: translateY(0px);
      }
      
      to {
        transform: translateY(-10px);
      }
    }
  }
`;

export const Container = styled.main`
  max-width: 1240px;
  height: 100vh;

  margin: 0 auto;
  padding: 40px 20px;

  @media (min-width: 768px) {
    height: 90vh;

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

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    justify-content: end;

    button {
      max-width: 230px;
    }
  }
`;

export const Figure = styled.div`
  img {
    width: 100%;
  }
`;
