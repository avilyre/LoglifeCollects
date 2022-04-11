import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  height: ${RFValue(173)}px;
  width: 100%;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
`;

export const Control = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 0 23px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${({ theme }) => RFValue(theme.font.size.medium)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  margin-right: 15px;
`;

export const ButtonIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => RFValue(theme.font.size.large)}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TitleIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => RFValue(theme.font.size.medium)}px;

  margin-right: 10px;
`;

export const EmptyContainer = styled.View`
  width: 35px;
`;
