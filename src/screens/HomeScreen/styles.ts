import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons/";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Collect } from "../../services/interface";

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

export const CardsList = styled(
  FlatList as new (props: FlatListProps<Collect>) => FlatList<Collect>
)`
  flex: 1;

  height: ${RFPercentage(87)}px;

  width: 100%;

  padding: 0 23px;
  
  position: absolute;
  top: ${RFPercentage(20)}px;
  left: 0;
`;
