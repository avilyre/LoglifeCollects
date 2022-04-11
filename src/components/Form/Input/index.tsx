import React from "react";

import { InputProps } from "./interface";

import { Container, Label, InputText } from "./styles";

export function Input({ label, ...props }: InputProps): JSX.Element {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputText {...props} />
    </Container>
  );
}
