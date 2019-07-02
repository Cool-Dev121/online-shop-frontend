import React, { useState, useEffect } from 'react';
import { styled } from '../themes';
import {
  bordered, shadowed, FormControl, withBottomPadding,
} from '../shared';
import { ControlErrorMessage } from '../ControlErrorMessage';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${props => withBottomPadding(props.theme)}
`;

const TitleContainer = styled.div`
  font-size: ${props => props.theme.fontSize.md}px;
  line-height: 26px;
  color: ${props => props.theme.input.titleColor};
`;

const InputComponent = styled.input`
  padding: ${props => props.theme.padding.sm}px ${props => props.theme.padding.lg}px;
  outline: none;
  box-sizing: border-box;
  font-size: ${props => props.theme.fontSize.md}px;
  width: 100%;
  ${props => bordered(props.theme)}
  ${shadowed}
`;

interface Props extends FormControl<string | number, string> {
  title: string;
  placeholder?: string;
  type?: string;
}

export const Input = (props: Props) => {
  const {
    title, placeholder = '', value = '', onChange, errorMessage, type = 'text',
  } = props;

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <InputComponent
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const { value: targetValue } = event.target;
          if (onChange) {
            onChange(targetValue);
          }
        }}
        type={type}
      />
      <ControlErrorMessage>{errorMessage || ''}</ControlErrorMessage>
    </MainContainer>
  );
};
