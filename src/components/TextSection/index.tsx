import { Container } from "./styles";
import { Props } from "./interface";
import React from "react";

export function TextSection({ children, tag }: Props) {
  return (
    <Container>
      <span>{tag}</span>
      <h1>{children}</h1>
      <span>{tag}</span>
    </Container>
  );
}
