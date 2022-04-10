import React from "react";

import uuid from "react-native-uuid";

import { CollectCard } from "../../components/CollectCard";

import {
  Container,
  Header,
  Control,
  Icon,
  Title,
  ContentContainer,
  HeaderButton,
  HeaderButtonIcon,
  HeaderTitleContainer,
  EmptyContainer
} from "./styles";

export function CollectDetailsScreen(): JSX.Element {

  return (
    <Container>
      <Header>
        <Control>
          <HeaderButton>
            <HeaderButtonIcon name="arrow-left" />
          </HeaderButton>
          <HeaderTitleContainer>
            <Icon name="eye" />
            <Title>Detalhes</Title>
          </HeaderTitleContainer>
          <EmptyContainer />
        </Control>
      </Header>

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