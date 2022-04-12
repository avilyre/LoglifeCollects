import React from "react";

import { useNavigation } from "@react-navigation/native";

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

export function Header({
  title,
  icon,
  isDetails,
  customLeftIcon,
  customRightIcon
}: HeaderProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <Container>
      <Control
        isEnableRightIcon={!!customRightIcon}
      >
        {customLeftIcon && (
          <ButtonContainer onPress={customLeftIcon.onPress}>
            <ButtonIcon name={customLeftIcon.icon} />
          </ButtonContainer>
        )}

        {isDetails && (
          <ButtonContainer onPress={navigation.goBack}>
            <ButtonIcon name="arrow-left" />
          </ButtonContainer>
        )}
        <TitleContainer>
          {icon && <TitleIcon name={icon} />}
          <Title>{title}</Title>
        </TitleContainer>

        {customRightIcon && (
          <ButtonContainer onPress={customRightIcon.onPress}>
            <ButtonIcon name={customRightIcon.icon} />
          </ButtonContainer>
        )}
      </Control>
    </Container>
  );
}
