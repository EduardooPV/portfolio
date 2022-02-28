import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { bubble as Menu } from "react-burger-menu";

import { Container, MenuHamburguer, NavLinks, Content } from "./styles";

import MenuImg from "../../assets/menu.svg";
import CloseImg from "../../assets/close.svg";
import { useWidth } from "../../utils/useWidth";

interface NavbarProps {
  toggleTheme: () => void;
  theme: {
    title: string;
  };
}

export function Navbar({ toggleTheme, theme }: NavbarProps) {
  const { colors } = useContext(ThemeContext);
  const width = useWidth();

  return (
    <Container>
      <Content>
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
              customBurgerIcon={<img src={MenuImg.src} />}
              customCrossIcon={<img src={CloseImg.src} />}
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
