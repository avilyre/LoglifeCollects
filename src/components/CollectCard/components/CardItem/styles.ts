import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const Icon = styled(Feather)`
  font-size: ${({ theme }) => RFValue(theme.font.size.extraLarge)}px;
  color: ${({ theme }) => theme.colors.primary};

  margin-right: 22px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.bold};
  font-size: ${({ theme }) => RFValue(theme.font.size.extraSmall)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => RFValue(theme.font.size.regular)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoContainer = styled.View``;
