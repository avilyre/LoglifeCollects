import React, { useEffect, useState } from "react";

import { ActivityIndicator } from "react-native";

import uuid from "react-native-uuid";
import { useTheme } from "styled-components";

import { CollectCard } from "../../components/CollectCard";
import { getCollects } from "../../services/getCollects";
import { Collect } from "../../services/getCollects/interface";
import { Header } from "../../components/Header";

import { ScreenNames } from "../../routes/interface";
import { CollectHomeScreenProps } from "./interface";

import {
  Container,
  CollectCardList,
  ActivityIndicatorContainer
} from "./styles";

import { useAuth } from "../../hooks/useAuth";
import { CollectDetailsScreenParams } from "../CollectDetailsScreen/interface";


export function CollectsHomeScreen({ navigation }: CollectHomeScreenProps): JSX.Element {
  const theme = useTheme();
  const { signOut } = useAuth();
  const [collects, setCollects] = useState<Collect[]>([] as Collect[]);

  async function getCollectData() {
    const result = await getCollects();
    setCollects(result);
  }

  function handleLogout() {
    signOut();
  }

  function handleCollectCard(collect: Collect) {
    const collectData: CollectDetailsScreenParams = {
      client: collect.remetente,
      date: collect.collect_date,
      address: collect.street
    }

    navigation.navigate(ScreenNames.CollectDetailsScreen, { collectData });
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
          onPress: handleLogout
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
              onPress={() => handleCollectCard(item)}
            />
          )}
        />
      )}
    </Container>
  )
}