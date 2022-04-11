import React from "react";
import { Button } from "../Form/Button";
import { Divider } from "../Divider";

import { CollectCardItem } from "./components/CardItem";
import { CollectCardProps } from "./interface";

import { Container, ListItems } from "./styles";

export function CollectCard({
  items,
  bottomButton,
  ...props
}: CollectCardProps): JSX.Element {
  return (
    <Container {...props}>
      <ListItems
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CollectCardItem {...item}/>
        )}
      />
      <Divider />
      {bottomButton && <Button {...bottomButton} />}
    </Container>
  );
}