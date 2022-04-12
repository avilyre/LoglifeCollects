import React from "react";

import uuid from "react-native-uuid";

import { CollectCard } from "../../components/CollectCard";
import { Header } from "../../components/Header";
import { ScreenNames } from "../../routes/interface";
import { CollectDetailsScreenProps } from "./interface";

import {
  Container,
  ContentContainer
} from "./styles";

export function CollectDetailsScreen({
  route,
  navigation
}: CollectDetailsScreenProps): JSX.Element {
  const { client, date, address } = route.params.collectData;

  function handleLaunchCollect() {
    navigation.navigate(ScreenNames.CollectLaunchScreen);
  }

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
            onPress: () => handleLaunchCollect()
          }}
        />
      </ContentContainer>
    </Container>
  )
}