import React from "react";

import { InputProps } from "./interface";

import { Container, Label, InputText, TextError } from "./styles";

export function Input({ label, isSide, error, ...props }: InputProps): JSX.Element {
  return (
      <Container isSide={isSide}>
        {label && <Label>{label}</Label>}
        <InputText {...props} />
        {error && <TextError>{error}</TextError>}
      </Container>
  );
}
