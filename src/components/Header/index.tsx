import React from "react";
import { Input } from "../Form/Input";
import { HeaderProps } from "./interface";

import {
  Container,
  Control,
  ButtonContainer,
  ButtonIcon,
  TitleContainer,
  TitleIcon,
  Title
} from "./styles";

export function Header({ title, icon, isDetails, customLeftIcon }: HeaderProps): JSX.Element {
  return (
    <Container>
      <Control>
        {customLeftIcon && (
          <ButtonContainer onPress={customLeftIcon.onPress}>
            <ButtonIcon name={customLeftIcon.icon} />
          </ButtonContainer>
        )}

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
