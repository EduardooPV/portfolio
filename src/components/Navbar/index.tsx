import React, { useContext } from "react";

import { Container, Content, MenuHamburguer, NavLinks } from "./styles";
import { bubble as Menu } from "react-burger-menu";
import { NavbarProps } from "./interface";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Media } from "../MediaScreen";

export function Navbar({ toggleTheme, theme }: NavbarProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <a href="/">
          <img src="assets/logo.svg" alt="Logo" />
        </a>

        <Switch
          onChange={toggleTheme}
          checked={theme.title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.primary}
          onColor="#fff"
          onHandleColor={colors.primary}
        />
        <Media greaterThan="sm">
          <NavLinks>
            <a href="#hero">Início</a>
            <a href="#about">Sobre</a>
            <a href="#skills">Conhecimento</a>
            <a href="#projects">Projetos</a>
            <a
              href="/CV-Luiz-Eduardo-Front-End.pdf/"
              download="CV-Luiz-Eduardo-Front-End"
            >
              Curriculo
            </a>
          </NavLinks>
        </Media>
        <Media at="sm">
          <MenuHamburguer>
            <Menu
              right
              noOverlay
              customBurgerIcon={<img src="/assets/menu.svg" />}
              customCrossIcon={<img src="/assets/close.svg" />}
            >
              <a className="menu-item" href="#hero">
                Início
              </a>
              <a className="menu-item" href="#about">
                Sobre
              </a>
              <a className="menu-item" href="#skills">
                Conhecimento
              </a>
              <a className="menu-item" href="#projects">
                Projetos
              </a>
              <a
                className="menu-item"
                href="/CV-Luiz-Eduardo-Front-End.pdf/"
                download="CV-Luiz-Eduardo-Front-End"
              >
                Download CV
              </a>
            </Menu>
          </MenuHamburguer>
        </Media>
      </Content>
    </Container>
  );
}
