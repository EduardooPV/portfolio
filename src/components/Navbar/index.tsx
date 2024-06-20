import React, { useState } from "react";

import { Container, Content, MenuIcon, Menu, NavLinks } from "./styles";
import { Media } from "../MediaScreen";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  logo: {
    description: string;
    url: string;
    width: number;
    height: number;
  };
  content: {
    links: {
      text: string;
      href: string;
    }[];
  };
}

export function Navbar({ logo, content }: Props) {
  const [active, setActive] = useState(false);

  function Toggle() {
    setActive(!active);
  }

  return (
    <Container data-aos="fade-down" data-aos-duration="800">
      <Content>
        <a href="/" title="Logo" tabIndex={0}>
          <Image
            src={logo.url}
            width={logo.width}
            height={logo.height}
            alt={logo.description}
            priority
          />
        </a>

        <div>
          <Media greaterThan="sm">
            <NavLinks>
              {content &&
                content.links.map((link) => (
                  <Link key={link.text} href={link.href} passHref>
                    <a>{link.text}</a>
                  </Link>
                ))}
            </NavLinks>
          </Media>
          <Media at="sm">
            <MenuIcon
              className={active ? "open" : "menuClose"}
              onClick={Toggle}
            />
            <Menu className={active ? "menuOpen" : "menuClose"}>
              {content &&
                content.links.map((link) => (
                  <Link key={link.text} href={link.href} passHref>
                    <a className="menu-item" onClick={Toggle}>
                      {link.text}
                    </a>
                  </Link>
                ))}
            </Menu>
          </Media>
        </div>
      </Content>
    </Container>
  );
}
