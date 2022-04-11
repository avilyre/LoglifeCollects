import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 46px;

  background: ${({ theme }) => theme.colors.primary};
`;

export const CardPanel = styled.View`
  width: 100%;

  padding: 25px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${({ theme }) => RFValue(theme.font.size.medium)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 40px;
`;
