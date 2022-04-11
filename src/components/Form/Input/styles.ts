import styled, { css } from "styled-components/native";

import { InputProps } from "./interface";

export const Container = styled.View<Pick<InputProps, "isSide">>`
  ${({ isSide }) => isSide ?
    css`width: 48%;`
    :
    css`width: 100%;`
  }
  
  margin-bottom: 23px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font.family.bold};
  font-size: ${({ theme }) => theme.font.size.small}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 6px;
  margin-bottom: 6px;
`;

export const InputText = styled.TextInput`
  padding: 16px 18px;
  
  border-radius: 8px;

  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => theme.font.size.medium}px;
  
  background: ${({ theme }) => theme.colors.shape};
`;
