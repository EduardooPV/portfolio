import React, { useContext } from 'react';
import { Container } from './styles';

import Switch from "react-switch";
import { ThemeContext } from 'styled-components'

interface NavbarProps {
  toggleTheme: () => void;
  theme: {
    title: string
  };
}

export function Navbar({ toggleTheme, theme }: NavbarProps ) {
  const { colors } = useContext(ThemeContext)

  return (
    <Container>
      <Switch 
        onChange={toggleTheme} 
        checked={theme.title === 'light'} 
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}

        offColor={colors.primary}
        onColor="#fff"
        onHandleColor={colors.primary}
      />
    </Container>
  )
}