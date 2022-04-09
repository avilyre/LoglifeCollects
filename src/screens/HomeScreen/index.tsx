import React from "react";

import {
  Container,
  Header,
  Control,
  Icon,
  Title
} from "./styles";

export function HomeScreen(): JSX.Element {
  return (
    <Container>
      <Header>
        <Control>
          <Icon name="truck" />
          <Title>Coletas</Title>
        </Control>
      </Header>
    </Container>
  )
}