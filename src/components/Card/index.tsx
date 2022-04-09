import React from "react";

import { CardItem } from "./components/CardItem";
import { CardProps } from "./interface";

import { Container, ListItems } from "./styles";

export function Card({ items, onPress }: CardProps): JSX.Element {
  return (
    <Container onPress={onPress}>
      <ListItems
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem {...item}/>
        )}
      />
    </Container>
  );
}