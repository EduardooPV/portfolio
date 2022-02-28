import styled from "styled-components";
import c from '../../styles/pallete.json'
import f from '../../styles/typography.json'

export const Container = styled.header`
  height: 60px;

  padding: 0 5%;


  background: ${c.neutral500};
  color: ${c.neutral200};

  @media (min-width: 768px) {
    height: 80px;
  }
`

export const Content = styled.div`
  max-width: 1024px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

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
    color: ${c.neutral200};
    
    &:last-child {
      padding: 5px 20px;

      border-radius: 0.25rem;
      background-color: ${c.primary300};
      font-weight: ${f.paragraphLarge.fontWeight.bold};
      color: ${c.neutral700};
    }
  }
`

export const MenuHamburguer = styled.div`
  width: 35px;
  height: 35px;

  position: relative;
  
  .bm-menu-wrap {
    width: 100vw!important;
    top: 0;
  }

  .bm-cross-button {
    width: 50px!important;
    height: 50px!important;
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
`