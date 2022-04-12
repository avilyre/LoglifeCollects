import { Control } from "react-hook-form";
import { InputProps } from "../Input/interface";

export interface InputFormProps extends InputProps {
  name: string;
  control: Control<any, object>;
}
