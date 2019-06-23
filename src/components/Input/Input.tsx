import React from 'react';
import { styled } from '../themes';
import { bordered, shadowed } from '../shared';
import { ControlErrorMessage } from '../ControlErrorMessage';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: ${props => props.theme.padding.md}px;
  width: 100%;
`;

const TitleContainer = styled.div`
  font-size: ${props => props.theme.fontSize.md}px;
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

interface Props {
  title: string;
  name?: string;
  placeholder?: string;
  value: string | number;
  onChange?: (value: string) => void;
  errorMessage?: string;
}

export const Input = (props: Props) => {
  const {
    title, name, placeholder = '', value, onChange, errorMessage,
  } = props;

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <InputComponent
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = event.target;
          onChange && onChange(value);
        }}
      />
      <ControlErrorMessage>{errorMessage || ''}</ControlErrorMessage>
    </MainContainer>
  );
};
