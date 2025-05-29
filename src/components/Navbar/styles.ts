import styled, { keyframes } from "styled-components";
import c from "../../styles/pallete.json";
import f from "../../styles/typography.json";

interface ContainerProps {
  $visible: boolean;
  $currentScroll: number;
}

export const Container = styled.header<ContainerProps>`
  height: 70px;
  width: 100%;
  position: fixed;

  color: ${c.neutral200};

  z-index: 99;

  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease,
    border-bottom 0.4s ease;

  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(-100%)"};

  background: ${({ $currentScroll, $visible }) =>
    $visible && $currentScroll > 50 ? "rgba(9, 9, 10, 0.6)" : "transparent"};

  border-bottom: ${({ $currentScroll, $visible }) =>
    $visible && $currentScroll > 50
      ? "1px solid rgba(114, 114, 126, 0.4)"
      : "none"};

  backdrop-filter: ${({ $currentScroll, $visible }) =>
    $visible && $currentScroll > 50 ? "blur(10px)" : "none"};
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

export const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;

  > img:last-child {
    display: flex;
  }
  > img:first-child {
    display: none;
  }

  img {
    height: 50px;
    object-fit: contain;
    padding: 4px 0;
    transition: filter 0.3s ease;
  }

  :hover {
    img {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 768px) {
    > img:last-child {
      display: none;
    }
    > img:first-child {
      display: flex;
    }
  }
`;

export const NavLinks = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    padding: 0px 10px;

    color: ${c.neutral100};
    font-family: montserrat, sans-serif;
    font-size: ${f.paragraphLarge.fontSize};
    line-height: ${f.paragraphLarge.lineHeight};
    text-decoration: none;

    border-radius: 4px;

    position: relative;

    ::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0px;
      height: 2px;
      background: ${c.info};

      transition: all 0.2s;
    }

    &:hover {
      ::after {
        left: 0;
        width: 100%;
      }
    }

    &:active {
      color: ${c.white};
    }
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
    right: 0;

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
    top: -900%;
    opacity: 0;
  }
  100% {
    top: 60px;
    opacity: 1;
  }
`;

export const Menu = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;

  width: 100%;
  height: 100%;

  top: -100%;
  z-index: 4;

  font-size: ${f.h4.fontSize};
  font-weight: ${f.h4.fontWeight.bold};
  line-height: ${f.h4.lineHeight};
  color: white;

  @media (orientation: landscape) {
    top: -200%;
  }

  a {
    width: 80%;
    padding: 10px 0;
    text-decoration: none;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: ${f.h4.fontSize};
    line-height: ${f.h4.lineHeight};
    font-weight: ${f.h4.fontWeight.bold};
    color: ${c.neutral500};
    border: 1px solid transparent;

    @media (min-width: 1024px) {
      font-size: ${f.h2.fontSize};
      font-weight: ${f.h2.fontWeight.bold};
      line-height: ${f.h2.lineHeight};
    }
  }

  a:active {
    color: ${c.white};
    border-radius: 4px;
    border: 1px solid ${c.white};
  }

  a:last-child {
    color: ${c.white};
    background: ${c.neutral500};
    border-radius: 4px;

    &:active {
      color: ${c.primary300};
    }
  }

  &.menuOpen {
    display: flex;
    align-items: center;
    gap: 20px;

    width: 100vw;
    height: auto;
    padding: 20px;
    z-index: 4;
    top: 60px;
    left: 0;
    overflow: auto;

    animation: ${slide} 0.4s;
    background: ${c.primary300};
  }
`;
