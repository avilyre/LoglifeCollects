import React from "react";
import { CardItemProps, CardProps } from "../../interface";

import {
  Container,
  Icon,
  InfoContainer,
  Title,
  Description
} from "./styles";

export function CollectCardItem({ icon, title, description }: CardItemProps): JSX.Element {
  return (
    <Container>
      <Icon name={icon} />
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
    </Container>
  );
}
