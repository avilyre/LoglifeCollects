import { TouchableOpacityProps } from "react-native";

import { ButtonProps } from "../Button/interface";

export interface CollectCardItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CollectCardProps extends TouchableOpacityProps {
  items: CollectCardItemProps[];
  bottomButton?: ButtonProps;
}