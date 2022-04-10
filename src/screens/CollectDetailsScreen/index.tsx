import React from "react";

import uuid from "react-native-uuid";

import { CollectCard } from "../../components/CollectCard";
import { Header } from "../../components/Header";

import {
  Container,
  ContentContainer
} from "./styles";

export function CollectDetailsScreen(): JSX.Element {

  return (
    <Container>
      <Header
        title="Detalhes"
        icon="eye"
        // isDetails
      />

      <ContentContainer>
        <CollectCard
          disabled
          items={[
            {
              id: uuid.v4() as string,
              icon: "users",
              title: "Cliente",
              description: "Fluery Company",
            },
            {
              id: uuid.v4()  as string,
              icon: "calendar",
              title: "Data",
              description: "28/01/2022",
            },
            {
              id: uuid.v4()  as string,
              icon: "clock",
              title: "Horário",
              description: "13:00 ás 17:00",
            },
            {
              id: uuid.v4()  as string,
              icon: "tag",
              title: "Remetente",
              description: "Unimed Company",
            }
          ]}
          bottomButton={{
            title: "Lançar coleta",
            onPress: () => {}
          }}
          onPress={() => {}}
        />
      </ContentContainer>
    </Container>
  )
}