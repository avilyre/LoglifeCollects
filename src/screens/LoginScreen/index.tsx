import React from "react";
import { Button } from "../../components/Form/Button";

import { Input } from "../../components/Form/Input";

import { CardPanel, Container, Title } from "./styles";

export function LoginScreen(): JSX.Element {
  return (
    <Container>
      <Title>Loglife Collects</Title>
      <CardPanel>
        <Input
          label="E-mail"
          placeholder="Ex. usuario@exemplo.com"
        />
        <Input
          label="Senha"
          placeholder="******"
        />

        <Button
          title="Entrar"
          onPress={() => {}}
        />
      </CardPanel>
    </Container>
  );
}
