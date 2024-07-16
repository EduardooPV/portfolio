import { Container } from "./styles";
import { Props } from "./interface";
import React from "react";

export function TextSection({ children, tag, tabIndex, h1, ...props }: Props) {
  return (
    <Container {...props}>
      <span>{tag}</span>
      {h1 ? (
        <h1 tabIndex={tabIndex}>{children}</h1>
      ) : (
        <h2 tabIndex={tabIndex}>{children}</h2>
      )}
      <span>{tag}</span>
    </Container>
  );
}
