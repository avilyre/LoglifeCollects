import React, { useEffect, useState } from "react";

import { ActivityIndicator } from "react-native";

import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { StorageKeys } from "../../constants/storageKeys";
import { useAuth } from "../../hooks/useAuth";


export function CollectsHomeScreen({ navigation }: CollectHomeScreenProps): JSX.Element {
  const theme = useTheme();
  const { signOut } = useAuth();
  const [collects, setCollects] = useState<Collect[]>([] as Collect[]);

  async function getCollectData() {
    const result = await getCollects();
    setCollects(result);
  }

  async function handleLogout() {
    signOut();
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
              onPress={() => {}}
            />
          )}
        />
      )}
    </Container>
  )
}