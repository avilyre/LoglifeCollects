import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons/";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(173)}px;
  width: 100%;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
`;

export const Control = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${({ theme }) => RFValue(theme.font.size.medium)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => RFValue(theme.font.size.medium)}px;

  margin-right: 10px;
`;
