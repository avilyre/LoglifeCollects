import React from "react";

import { InputProps } from "./interface";

import { Container, Label, InputText } from "./styles";

export function Input({ label, isSide, ...props }: InputProps): JSX.Element {
  return (
    <Container isSide={isSide}>
      {label && <Label>{label}</Label>}
      <InputText {...props} />
    </Container>
  );
}
