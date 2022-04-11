import React from "react";
import { Image } from "react-native";
import { InputImageSelectorProps } from "./interface";

import {
  Container,
  Icon,
  ImageContainer,
  RemoveButtonContainer,
  RemoveButtonTitle
} from "./styles";

export function InputImageSelector({
  selectedImage,
  onRemoveImage,
  ...props
}: InputImageSelectorProps): JSX.Element {
  return (
    <Container {...props}>
      {selectedImage ? (
        <>
          <ImageContainer
            source={{
              uri: selectedImage
            }}
          />
          <RemoveButtonContainer onPress={onRemoveImage}>
            <RemoveButtonTitle>Remover</RemoveButtonTitle>
          </RemoveButtonContainer>
        </>
      )
      : <Icon name="camera" />}
    </Container>
  );
}
