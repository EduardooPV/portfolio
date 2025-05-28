import { Container } from "./styles";
import { Props } from "./interface";
import React from "react";

export function ButtonGeneric({ children, invisible, ...props }: Props) {
  return (
    <Container types={invisible} tabIndex={-1} {...props}>
      {children}
    </Container>
  );
}
