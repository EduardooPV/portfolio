import styled from "styled-components";
import c from "../../styles/pallete.json";

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

  border: 1px solid ${c.neutral200};
  
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
      border-top: 1px solid;
    }
  }

  @media (min-width: 768px) {
    margin-top: 8rem;
    flex-direction: row;
    padding: 2rem 0;

    div {
      & + div {
        border-left: 1px solid;
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
  background: ${c.neutral500};
  transition: all 0.4s;
  opacity: 0;

  border: 1px solid ${c.neutral200};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

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
`