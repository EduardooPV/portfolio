import styled, { keyframes } from "styled-components";
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
`;

export const Content = styled.div`
  max-width: 1240px;
  height: 100%;

  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;
  }
  > a,
  > a svg {
    height: 80%;
    width: fit-content;
  }
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

    position: relative;

    ::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0px;
      height: 2px;
      background: ${c.primary300};

      transition: all 0.2s;
    }

    &:hover {
      ::after {
        left: 0;
        width: 100%;
      }
    }
  }

  a:nth-child(4) {
    margin-right: 10px;
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  z-index: 5;
  right: 5%;
  top: 45%;

  width: 28px;
  height: 4px;

  cursor: pointer;

  transition: 0.5s;

  border-radius: 3px;

  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &::before {
    position: absolute;
    top: -8px;

    width: 28px;
    height: 4px;
    border-radius: 3px;
    content: "";

    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    transition: 0.5s;
  }

  &::after {
    position: absolute;
    top: 8px;

    width: 28px;
    height: 4px;
    border-radius: 3px;
    content: "";

    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    transition: all 0.5s;
  }

  &.open {
    background: transparent;
    box-shadow: 0 2px 5px transparent;

    &::after {
      position: absolute;
      top: 0;
      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(225deg);
      content: "";
      width: 28px;
      height: 4px;
      border-radius: 3px;
    }

    &::before {
      position: absolute;
      top: 0;
      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(135deg);
      content: "";
      width: 28px;
      height: 4px;
      border-radius: 3px;
    }
  }
`;

const slide = keyframes`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 5%;
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    top: 5%;
    opacity: 1;
  }
  100% {
    top: -100%;
    opacity: 0;
  }
`;

export const Menu = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;

  width: 100%;
  height: 100%;

  top: -100%;
  z-index: 4;

  font-size: ${f.h4.fontSize};
  font-weight: ${f.h4.fontWeight.bold};
  line-height: ${f.h4.lineHeight};
  color: white;

  li {
    margin: 20px 0;

    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
  }

  animation: ${slideOut} 0.5s linear;
  background: ${c.primary500};

  @media (orientation: landscape) {
    top: -200%;
  }

  &.menuOpen {
    display: flex;
    align-items: center;

    width: 100vw;
    height: 100vh;
    padding: 40px 0;
    z-index: 4;
    top: 0;
    left: 0;
    overflow: auto;

    animation: ${slide} 0.5s linear;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 80%;

      z-index: 5;

      padding-bottom: 40px;
    }
  }
`;
