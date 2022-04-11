import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ButtonProps } from "./interface";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})<Pick<ButtonProps, "type">>`
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 17px;
  border-radius: 8px;

  ${({ type }) => type === "primary" && css`
    background: ${({ theme }) => theme.colors.primary};
  `}

  ${({ type }) => type === "warning" && css`
    background: ${({ theme }) => theme.colors.warning};
  `}

  ${({ type }) => type === "success" && css`
    background: ${({ theme }) => theme.colors.success};
  `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.medium};
  font-size: ${({ theme }) => RFValue(theme.font.size.small)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
