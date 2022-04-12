import * as Yup from "yup";

export const formSchema = Yup.object({
  email: Yup
    .string()
    .email("E-mail inválido")
    .lowercase("Seu E-mail deve com letras minúsculas")
    .required("Por favor insira seu e-mail"),
  password: Yup
    .string()
    .min(6, "Sua senha deve ter no mínimo 6 caracteres")
    .max(20, "Sua senha dve ter no máximo 20 caracteres")
    .required("Por favor insira sua senha")
});
