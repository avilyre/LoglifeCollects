import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;

  height: ${RFPercentage(87)}px;
  width: 100%;

  padding: 0 23px;
  
  position: absolute;
  top: ${RFPercentage(19.6)}px;
  left: 0;
`;

export const Form = styled.View`
  border-radius: 8px;

  padding: 16px;

  background: ${({ theme }) => theme.colors.background};
`;

export const SideInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
