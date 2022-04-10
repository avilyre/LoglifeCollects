import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { CardItemProps } from "./interface";

export const Container = styled.TouchableOpacity`
  width: 100%;

  border-radius: 8px;
  padding: 26px 24px 18px;
  margin-bottom: 24px;

  background: ${({ theme }) => theme.colors.shape};
`;

export const ListItems = styled(
  FlatList as new (props: FlatListProps<CardItemProps>) => FlatList<CardItemProps>
)`
  flex: 1;

  width: 100%;
`;