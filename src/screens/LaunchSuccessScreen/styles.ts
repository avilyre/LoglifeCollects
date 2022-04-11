import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 46px;

  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${({ theme }) => RFValue(theme.font.size.regular)}px;
  color: ${({ theme }) => theme.colors.text};

  margin: 25px 0 80px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(80)}px;
  color: ${({ theme }) => theme.colors.primary};

`;

