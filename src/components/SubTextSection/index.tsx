import { Container } from "./styles";
import { Props } from "./interface";
import React from "react";

export function SubTextSection({ children, tabIndex, h4, ...props }: Props) {
  return (
    <Container {...props}>
      {h4 ? (
        <h3 tabIndex={tabIndex}>{children}</h3>
      ) : (
        <h4 tabIndex={tabIndex}>{children}</h4>
      )}
    </Container>
  );
}
