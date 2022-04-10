import React from "react";
import { HeaderProps } from "./interface";

import {
  Container,
  Control,
  ButtonContainer,
  ButtonIcon,
  TitleContainer,
  TitleIcon,
  Title,
  EmptyContainer
} from "./styles";

export function Header({ title, icon, isDetails }: HeaderProps): JSX.Element {
  return (
    <Container>
      <Control>
        {isDetails && (
          <ButtonContainer>
            <ButtonIcon name="arrow-left" />
          </ButtonContainer>
        )}
        <TitleContainer>
          {icon && <TitleIcon name={icon} />}
          <Title>{title}</Title>
        </TitleContainer>
      </Control>
    </Container>
  );
}
