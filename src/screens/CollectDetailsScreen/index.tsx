import React from "react";

import uuid from "react-native-uuid";

import { CollectCard } from "../../components/CollectCard";
import { Header } from "../../components/Header";

import {
  Container,
  ContentContainer
} from "./styles";

export function CollectDetailsScreen({ route }): JSX.Element {
  const { client, date, address } = route.params.data;

  return (
    <Container>
      <Header
        title="Detalhes"
        icon="eye"
        isDetails
      />

      <ContentContainer>
        <CollectCard
          disabled
          items={[
            {
              id: uuid.v4() as string,
              icon: "users",
              title: "Cliente",
              description: client,
            },
            {
              id: uuid.v4()  as string,
              icon: "calendar",
              title: "Data",
              description: date,
            },
            {
              id: uuid.v4()  as string,
              icon: "map-pin",
              title: "Endereço",
              description: address,
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