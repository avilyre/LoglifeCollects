import * as Yup from "yup";

export const formSchema = Yup.object({
  email: Yup
    .string()
    .email("E-mail inválido")
    .lowercase("Seu E-mail deve com letras minúsculas")
    .required("Por favor insira seu e-mail"),
  password: Yup
    .string()
    .required("Por favor insira sua senha")
});
