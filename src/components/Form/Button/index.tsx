import React from "react";

import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { ButtonProps } from "./interface";

import { Container, Title } from "./styles";

export function Button({
  title,
  type = "primary",
  isLoading,
  ...props
}: ButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container disabled={isLoading} {...props} type={type}>
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>  
      )}
    </Container>
  );
}
