import React, { useEffect, useState } from "react";

import uuid from "react-native-uuid";

import { Card } from "../../components/Card";
import { getCollects } from "../../services/getCollects";
import { Collect } from "../../services/interface";

import {
  Container,
  Header,
  Control,
  Icon,
  Title,
  CardsList
} from "./styles";

export function HomeScreen(): JSX.Element {
  const [collects, setCollects] = useState<Collect[]>([] as Collect[]);

  async function getCollectData() {
    const result = await getCollects();
    setCollects(result);
  }

  useEffect(() => {
    getCollectData();
  }, []);

  return (
    <Container>
      <Header>
        <Control>
          <Icon name="truck" />
          <Title>Coletas</Title>
        </Control>
      </Header>

      {collects && (
        <CardsList
          data={collects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              items={[
                {
                  id: uuid.v4() as string,
                  icon: "users",
                  title: "Cliente",
                  description: item.remetente,
                },
                {
                  id: uuid.v4()  as string,
                  icon: "calendar",
                  title: "Data",
                  description: item.collect_date,
                }
              ]}
              onPress={() => {}}
            />
          )}
        />
      )}
    </Container>
  )
}