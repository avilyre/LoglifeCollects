import React from "react";

import { Button } from "../../components/Form/Button";

import { Container, Icon, Title } from "./styles";

export function LaunchSuccessScreen(): JSX.Element {
  return (
    <Container>
      <Icon name="check-circle" />
      <Title>Lançamos sua coleta!</Title>
      <Button
        title="Continuar"

        onPress={() => {}}
      />
    </Container>
  );
}
