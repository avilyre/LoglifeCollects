import React from "react";

import { Controller } from "react-hook-form";

import { Input } from "../Input";
import { InputFormProps } from "./interface";

export function InputForm({ name, control, ...rest }: InputFormProps): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Input
          value={value}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
}
