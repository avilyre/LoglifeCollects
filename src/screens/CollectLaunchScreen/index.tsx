import React, { useState } from "react";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";

import { Container, ContentContainer, Form, SideInputs } from "./styles";

export function CollectLaunchScreen(): JSX.Element {
  const [isOcurrency, setIsOcurrency] = useState<boolean>(false);

  function handleToggleOcurrency() {
    setIsOcurrency(!isOcurrency)
  }

  return (
    <Container>
      <Header
        title="Lançar coleta"
        icon="send"
        isDetails
      />

      <ContentContainer>
        <Form>
          <Input
            label="Responsável"
            placeholder="Ex. João Paulo"
          />
          <SideInputs>
            <Input
              label="Volume"
              placeholder="Ex. 1"
              keyboardType="numeric"
              isSide
            />
            <Input
              label="Quant. de amostras"
              placeholder="Ex. 3"
              keyboardType="numeric"
              isSide
            />
          </SideInputs>
          <Button
            title="Finalizar"
            onPress={() => {}}
          />
          <Divider />
          <Button
            title={!isOcurrency ? "Não é ocorrência" : "É ocorrência"}
            type={!isOcurrency ? "success" : "warning"}
            onPress={handleToggleOcurrency}
          />
        </Form>
      </ContentContainer>
    </Container>
  );
}
