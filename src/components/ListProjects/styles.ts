import styled from "styled-components";
import c from "../../styles/pallete.json";

interface Layout {
  layout: boolean;
}

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

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 14px;

    button {
      background: ${c.background};
      border: 0;
      border-radius: 6px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg path {
        fill: ${c.neutral300};
      }
    }
  }
`;

export const Content = styled.section<Layout>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  position: relative;

  @media (min-width: 768px) {
    ${(props) =>
      props.layout
        ? "grid-template-columns: 1fr 1fr;"
        : "grid-template-columns: 1fr;"}
    gap: 40px;
  }
`;
