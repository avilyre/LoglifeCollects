import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  height: ${RFValue(120)}px;

  margin-bottom: 23px;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ImageContainer = styled.Image`
  flex: 1;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
`;

export const RemoveButtonContainer = styled.TouchableOpacity`
  width: 100%;

  padding: 6px 6px 10px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.danger};
`;

export const RemoveButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.colors.shape};
`;
