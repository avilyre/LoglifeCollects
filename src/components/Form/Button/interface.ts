import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: "primary" | "warning" | "success";
  isLoading?: boolean;
  onPress(): void;
}
