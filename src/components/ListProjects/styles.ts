import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 80px 20px 20px 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    padding: 140px 20px 20px 20px;
    gap: 60px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  position: relative;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
