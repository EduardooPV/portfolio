import { Container } from "./styles";
import { Props } from "./interface";
import React from "react";

export function ButtonGeneric({ children, invisible }: Props) {
  return (
    <Container types={invisible}>
      {children}
    </Container>
  );
}
