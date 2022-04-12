import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Collect } from "../../services/getCollects/interface";

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;

export const CollectCardList = styled(
  FlatList as new (props: FlatListProps<Collect>) => FlatList<Collect>
)`
  flex: 1;

  height: ${RFPercentage(87)}px;

  width: 100%;

  padding: 0 23px;
  
  position: absolute;
  top: ${RFPercentage(19.6)}px;
  left: 0;
`;

export const ActivityIndicatorContainer = styled.View`
  padding-top: 26px;
`;
