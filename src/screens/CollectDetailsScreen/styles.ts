import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;

  width: 100%;

  padding: 0 23px;
  
  position: absolute;
  top: ${RFPercentage(20)}px;
  left: 0;
`;
