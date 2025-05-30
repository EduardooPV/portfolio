import React, { useState, useEffect, useRef } from "react";

import { Container, Content, Logo, NavLinks } from "./styles";
import { Media } from "../MediaScreen";
import Link from "next/link";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";
import { ButtonGeneric } from "../ButtonGeneric";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setCurrentScroll(scrollY);

      if (scrollY > lastScrollY.current && scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container $visible={isVisible} $currentScroll={currentScroll}>
      <Content>
        <a
          href="/"
          title="Desenvolvedor Luiz Eduardo"
          tabIndex={0}
          onClick={() =>
            useAnalyticsEventTracker("Header", "click", "imagem-logo")
          }
        >
          <Logo>
            <img src="/assets/logo.png" />
            <img src="/assets/logo-mobile.png" />
          </Logo>
        </a>

        <div>
          <Media greaterThan="sm">
            <NavLinks>
              <Link href="/" passHref>
                <a
                  onClick={() =>
                    useAnalyticsEventTracker("Header", "click", "inicio")
                  }
                >
                  Início
                </a>
              </Link>
              <Link href="/projetos" passHref>
                <a
                  onClick={() =>
                    useAnalyticsEventTracker("Header", "click", "projetos")
                  }
                >
                  Projetos
                </a>
              </Link>
              <Link href="#contact" passHref>
                <ButtonGeneric>Contato</ButtonGeneric>
              </Link>
            </NavLinks>
          </Media>

          <Media at="sm">
            <NavLinks>
              <Link href="#contact" passHref>
                <ButtonGeneric>Contato</ButtonGeneric>
              </Link>
            </NavLinks>
          </Media>

          {/* <Media at="sm">
            <MenuIcon
              className={active ? "open" : "menuClose"}
              onClick={Toggle}
            />
            <Menu className={active ? "menuOpen" : "menuClose"}>
              <Link href="/" passHref>
                <a
                  className="menu-item"
                  onClick={() => {
                    Toggle();
                    useAnalyticsEventTracker(
                      "Header",
                      "click",
                      "inicio-mobile"
                    );
                  }}
                >
                  Início
                </a>
              </Link>
              <Link href="/projetos" passHref>
                <a
                  className="menu-item"
                  onClick={() => {
                    Toggle();
                    useAnalyticsEventTracker(
                      "Header",
                      "click",
                      "projetos-mobile"
                    );
                  }}
                >
                  Projetos
                </a>
              </Link>
              <Link href="/blog" passHref>
                <a
                  className="menu-item"
                  onClick={() => {
                    Toggle();
                    useAnalyticsEventTracker("Header", "click", "blog-mobile");
                  }}
                >
                  Blog
                </a>
              </Link> 
              <a
                className="menu-item"
                href="#contact"
                onClick={() => {
                  Toggle();
                  useAnalyticsEventTracker("Header", "click", "contato");
                }}
              >
                Contato
              </a>
            </Menu>
          </Media> */}
        </div>
      </Content>
    </Container>
  );
}
