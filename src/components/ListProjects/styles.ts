import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px 80px 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 60px;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;
