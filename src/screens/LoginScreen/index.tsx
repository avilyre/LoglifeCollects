import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Form/Button";
import { InputForm } from "../../components/Form/InputForm";

import { CardPanel, Container, Title } from "./styles";
import { formSchema } from "./utils";

export function LoginScreen(): JSX.Element {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  function handleLoginSubmit(data: any) {
    console.log(data);
  }

  return (
    <Container>
      <Title>Loglife Collects</Title>
      <CardPanel>
        <InputForm
          name="email"
          label="E-mail"
          placeholder="Ex. joao@exemplo.com"
          control={control}
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
          onPress={handleSubmit(handleLoginSubmit)}
        />
      </CardPanel>
    </Container>
  );
}
