import React from "react";

import { ButtonProps } from "./interface";

import { Container, Title } from "./styles";

export function Button({
  title,
  type = "primary",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <Container {...props} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
