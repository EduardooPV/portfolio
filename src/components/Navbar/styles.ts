import styled from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

export const Container = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;

  background: rgb(9, 9, 10, 0.6);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(114, 114, 126, 0.5);

  color: ${c.neutral200};

  z-index: 999;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const Content = styled.div`
  max-width: 1240px;
  height: 100%;

  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    padding: 5px 10px;
    font-family: montserrat, sans-serif;
    font-size: ${f.paragraphLarge.fontSize};
    line-height: ${f.paragraphLarge.lineHeight};
    color: ${c.neutral100};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a:nth-child(4) {
    margin-right: 2rem;
    padding: 4px 18px;

    border-radius: 0.25rem;
    background-color: ${c.primary300};
    font-weight: ${f.paragraphLarge.fontWeight.bold};
    color: ${c.neutral700};
    text-decoration: none;
    border: 1px solid transparent;
    transition: all 0.2s;

    &:hover {
      background-color: transparent;
      color: ${c.primary300};
      border: 1px solid ${c.primary300};
    }
  }
`;

export const MenuHamburguer = styled.div`
  width: 35px;
  height: 35px;

  position: relative;

  .bm-menu-wrap {
    width: 100vw !important;
    height: 100vh !important;
    top: 0;
  }

  .bm-cross-button {
    width: 50px !important;
    height: 50px !important;
  }

  .bm-morph-shape {
    fill: ${c.primary300};
  }

  .bm-menu {
    width: 100%;
  }

  .bm-item-list {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 2rem;

    color: #b8b7ad;
    padding: 1rem;
  }

  .menu-item {
    padding: 1rem;

    font-family: "montserrat", sans-serif;
    font-size: ${f.h4.fontSize};
    font-weight: ${f.h4.fontWeight.bold};
    color: ${c.neutral100};
    text-align: center;
    text-decoration: none;

    &:last-child {
      border-radius: 0.25rem;
      border: 2px solid ${c.neutral100};
    }
  }
`;
