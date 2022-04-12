import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

import { Divider } from "../../components/Divider";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { InputImageSelector } from "../../components/Form/InputImageSelector";

import { Header } from "../../components/Header";


import { Container, ContentContainer, Form, SideInputs } from "./styles";
import { CollectLaunchScreenProps, ImageProps } from "./interface";
import { useForm } from "react-hook-form";
import { InputForm } from "../../components/Form/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./utils";
import { Alert } from "react-native";
import { ScreenNames } from "../../routes/interface";

export function CollectLaunchScreen({
  route,
  navigation
}: CollectLaunchScreenProps): JSX.Element {
  const [declarationImage, setDeclarationImage] = useState<ImageProps>({} as ImageProps);
  const [isOcurrency, setIsOcurrency] = useState<boolean>(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

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
  }

  function handleRemoveImage() {
    setDeclarationImage({} as ImageProps);
  }

  function handleSubmitLaunchCollect(collect: any) {
    if (declarationImage.uri === undefined) {
      return Alert.alert("Loglife", "Por favor insira a imagem de declaração");
    }

    const launchData = {
      responsible: collect.responsible,
      sampleAmount: collect.sampleAmount,
      volume: collect.volume,
      declaration: declarationImage,
      isOcurrency
    }

    navigation.navigate(ScreenNames.LaunchSuccessScreen);
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
          <InputForm
            name="responsible"
            label="Responsável"
            placeholder="Ex. João Paulo"
            control={control}
            autoCapitalize="sentences"
            error={errors.responsible && errors.responsible.message}
          />
          <SideInputs>
            <InputForm
              name="volume"
              label="Volume"
              placeholder="Ex. 1"
              keyboardType="numeric"
              isSide
              control={control}
              error={errors.volume && errors.volume.message}
            />
            <InputForm
              name="sampleAmount"
              label="Quant. de amostras"
              placeholder="Ex. 3"
              keyboardType="numeric"
              isSide
              control={control}
              error={errors.sampleAmount && errors.sampleAmount.message}
            />
          </SideInputs>

          <InputImageSelector
            selectedImage={declarationImage.uri}
            onRemoveImage={handleRemoveImage}
            onPress={handleSelectImage}
          />
          
          <Button
            title="Finalizar"
            onPress={handleSubmit(handleSubmitLaunchCollect)}
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
