import { TouchableOpacityProps } from "react-native";

import { ButtonProps } from "../Button/interface";

export interface CardItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CardProps extends TouchableOpacityProps {
  items: CardItemProps[];
  bottomButton?: ButtonProps;
  onPress(): void;
}