import { TouchableOpacityProps } from "react-native";

export interface InputImageSelectorProps extends TouchableOpacityProps {
  selectedImage: string;
  onRemoveImage(): void;
}
