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
`;

export const ContainerCard = styled.div`
  width: 100%;

  margin-top: 3rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  position: relative;
  background: ${(props) => props.theme.colors.backgroundCards};

  border: 2px solid ${c.neutral200};
  z-index: 99;

  > div {
    width: 80%;

    margin: 0 auto;
    padding: 2rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & + div {
      border-top: 2px solid;
    }

    path {
      fill: ${(props) => props.theme.colors.icon};
    }
  }

  path {
    fill: ${(props) => props.theme.colors.text};
    stroke: ${(props) => props.theme.colors.text};
  }

  > svg {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    animation: mouseHover 1s forwards alternate infinite;

    @keyframes mouseHover {
      from {
        transform: translate(10px, 10px);
      }
      to {
        transform: translateX(0px);
      }
    }
  }

  p {
    font-size: ${t.h5.fontSize};
    font-weight: ${t.h5.fontWeight.bold};
    color: ${(props) => props.theme.colors.title};
  }

  @media (min-width: 768px) {
    margin-top: 8rem;
    flex-direction: row;
    padding: 2rem 0;

    div {
      & + div {
        border-left: 2px solid ${c.neutral200};
        border-top: 0;
      }
    }
  }
`;

export const ModalHover = styled.div`
  overflow: hidden;
  width: 100%;
  height: 300px;

  padding: 1rem;

  position: absolute;
  bottom: 0;
  background: ${(props) => props.theme.colors.background};
  transition: all 0.2s;
  opacity: 0;

  border: 2px solid ${c.neutral200};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;
