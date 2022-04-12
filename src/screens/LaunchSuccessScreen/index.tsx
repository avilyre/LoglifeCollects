import React from "react";

import { Button } from "../../components/Form/Button";
import { ScreenNames } from "../../routes/interface";
import { LaunchSuccessScreenProps } from "./interface";

import { Container, Icon, Title } from "./styles";

export function LaunchSuccessScreen({ navigation }: LaunchSuccessScreenProps): JSX.Element {

  function handleContinue() {
    navigation.push(ScreenNames.CollectHomeScreen);
  }

  return (
    <Container>
      <Icon name="check-circle" />
      <Title>Lançamos sua coleta!</Title>
      <Button
        title="Continuar"

        onPress={handleContinue}
      />
    </Container>
  );
}
