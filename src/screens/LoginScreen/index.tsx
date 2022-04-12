import React from "react";

import { Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Form/Button";
import { InputForm } from "../../components/Form/InputForm";

import { CardPanel, Container, Title } from "./styles";
import { formSchema } from "./utils";

import { UserLoginParams } from "../../services/getLogin/interface";
import { useAuth } from "../../hooks/useAuth";

export function LoginScreen(): JSX.Element {
  const { isLoading, signIn } = useAuth();
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

  function handleLoginSubmit(user: UserLoginParams) {
    Keyboard.dismiss();

    signIn({
      email: user.email,
      password: user.password
    });

    reset();
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
