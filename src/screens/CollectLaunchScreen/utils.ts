import * as Yup from "yup";

export const formSchema = Yup.object({
  responsible: Yup
    .string()
    .required("O campo responsável é obrigatório"),
  volume: Yup
    .number()
    .positive("Apenas números posivitos são permitidos")
    .required("Por favor insira o volume"),
  sampleAmount: Yup
  .number()
  .positive("Apenas números posivitos são permitidos")
  .required("Por favor insira a quantidade de amostras")
});
