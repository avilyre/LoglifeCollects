import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import uuid from "react-native-uuid";
import { useTheme } from "styled-components";

import { CollectCard } from "../../components/CollectCard";
import { getCollects } from "../../services/getCollects";
import { Collect } from "../../services/getCollects/interface";
import { Header } from "../../components/Header";

import {
  Container,
  CollectCardList,
  ActivityIndicatorContainer
} from "./styles";

export function CollectsHomeScreen(): JSX.Element {
  const theme = useTheme();

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
      <Header
        title="Coletas"
        icon="truck"
        customRightIcon={{
          icon: "power",
          onPress: () => {}
        }}
      />

      {collects.length === 0 ?
        <ActivityIndicatorContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </ActivityIndicatorContainer>
      :
      (
        <CollectCardList
          data={collects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CollectCard
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