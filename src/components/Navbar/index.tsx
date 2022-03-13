import { Container, Content, MenuHamburguer, NavLinks } from "./styles";
import React, { useContext } from "react";

import { bubble as Menu } from "react-burger-menu";
import { NavbarProps } from "./interface";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useWidth } from "../../utils/useWidth";

export function Navbar({ toggleTheme, theme }: NavbarProps) {
  const { colors } = useContext(ThemeContext);
  const width = useWidth();

  return (
    <Container>
      <Content>

        <img src="assets/logo.svg" alt="Logo" />
        
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
        {width > 768 ? (
          <NavLinks>
            <a>Início</a>
            <a>Sobre</a>
            <a>Conhecimento</a>
            <a>Projetos</a>
            <a>Contato</a>
            <a>Curriculo</a>
          </NavLinks>
        ) : (
          <MenuHamburguer>
            <Menu
              right
              noOverlay
              customBurgerIcon={<img src="/assets/menu.svg" />}
              customCrossIcon={<img src="/assets/close.svg" />}
            >
              <a className="menu-item">Início</a>
              <a className="menu-item">Sobre</a>
              <a className="menu-item">Conhecimento</a>
              <a className="menu-item">Projetos</a>
              <a className="menu-item">Contato</a>
              <a className="menu-item">Download CV</a>
            </Menu>
          </MenuHamburguer>
        )}
      </Content>
    </Container>
  );
}
