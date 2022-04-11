import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

import { Divider } from "../../components/Divider";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { InputImageSelector } from "../../components/Form/InputImageSelector";

import { Header } from "../../components/Header";


import { Container, ContentContainer, Form, SideInputs } from "./styles";
import { ImageProps } from "./interface";

export function CollectLaunchScreen(): JSX.Element {
  const [declarationImage, setDeclarationImage] = useState<ImageProps>({} as ImageProps);
  const [isOcurrency, setIsOcurrency] = useState<boolean>(false);

  function handleToggleOcurrency() {
    setIsOcurrency(!isOcurrency)
  }

  async function handleSelectImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true
    });

    if (result.cancelled) return;

    const { uri } = result as ImageInfo;
    setDeclarationImage({ uri });

    console.log(declarationImage);
  }

  function handleRemoveImage() {
    setDeclarationImage({} as ImageProps);
  }

  return (
    <Container>
      <Header
        title="Lançar coleta"
        icon="send"
        isDetails
      />

      <ContentContainer>
        <Form>
          <Input
            label="Responsável"
            placeholder="Ex. João Paulo"
          />
          <SideInputs>
            <Input
              label="Volume"
              placeholder="Ex. 1"
              keyboardType="numeric"
              isSide
            />
            <Input
              label="Quant. de amostras"
              placeholder="Ex. 3"
              keyboardType="numeric"
              isSide
            />
          </SideInputs>

          <InputImageSelector
            selectedImage={declarationImage.uri}
            onRemoveImage={handleRemoveImage}
            onPress={handleSelectImage}
          />
          
          <Button
            title="Finalizar"
            onPress={() => {}}
          />
          <Divider />
          <Button
            title={!isOcurrency ? "Não é ocorrência" : "É ocorrência"}
            type={!isOcurrency ? "success" : "warning"}
            onPress={handleToggleOcurrency}
          />
        </Form>
      </ContentContainer>
    </Container>
  );
}
