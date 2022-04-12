import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Form/Button";
import { InputForm } from "../../components/Form/InputForm";

import { CardPanel, Container, Title } from "./styles";
import { formSchema } from "./utils";

import { getUserLogin } from "../../services/getLogin";
import { UserLoginParams } from "../../services/getLogin/interface";
import { ScreenNames } from "../../routes/interface";
import { LoginScreenProps } from "./interface";
import { Alert } from "react-native";

export function LoginScreen({ navigation }: LoginScreenProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

  async function handleLoginSubmit(user: UserLoginParams) {
    setIsLoading(true);

    const result = await getUserLogin({
      email: user.email,
      password: user.password
    });

    if (result.length === 0) {
      setIsLoading(false);
      Alert.alert("Loglife", "E-mail ou senha incorreta");
      return;
    }
    
    navigation.navigate(ScreenNames.CollectHomeScreen);
    setIsLoading(false);
  }

  return (
    <Container>
      <Title>Loglife Collects</Title>
      <CardPanel>
        <InputForm
          name="email"
          label="E-mail"
          keyboardType="email-address"
          placeholder="Ex. joao@exemplo.com"
          control={control}
          autoCapitalize="none"
          error={errors.email && errors.email.message}
        />

        <InputForm
          name="password"
          label="Senha"
          secureTextEntry
          placeholder="******"
          control={control}
          error={errors.password && errors.password.message}
        />

        <Button
          title="Entrar"
          isLoading={isLoading}
          onPress={handleSubmit(handleLoginSubmit)}
        />
      </CardPanel>
    </Container>
  );
}
