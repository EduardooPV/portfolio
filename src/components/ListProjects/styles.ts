import styled from "styled-components";
import c from "../../styles/pallete.json";

interface Layout {
  layout: boolean;
}

export const Container = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0px 20px 80px 20px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    padding: 0px 20px 80px 20px;
    gap: 60px;
  }

  .layoutButton {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  div {
    display: flex;
    gap: 14px;

    button {
      background: ${c.neutral500};
      border: 0;
      border-radius: 6px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        svg path {
          fill: ${c.white};
        }
      }

      svg path {
        fill: ${c.neutral300};
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const Content = styled.section<Layout>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;

  z-index: 2;

  position: relative;

  @media (min-width: 768px) {
    ${(props) =>
      props.layout
        ? "grid-template-columns: 1fr 1fr;"
        : "grid-template-columns: 1fr;"}
    column-gap: 30px;
    row-gap: 60px;
  }
`;
