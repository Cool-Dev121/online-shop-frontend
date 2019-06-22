import React, { useState } from 'react';
import { styled } from '../themes';
import {
  bordered, shadowed, Validatable, validate,
} from '../shared';
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

interface Props extends Validatable {
  title: string;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (name: string, value: string) => void;
}

export const Input = (props: Props) => {
  const {
    title, name, placeholder = '', value, onChange, validators,
  } = props;

  const errorsInit: string[] = [];
  const [errors, setErrors] = useState(errorsInit);

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
          const validationResult = validate(value, validators);
          setErrors(validationResult.errors);
          onChange(name, value);
        }}
      />
      <ControlErrorMessage>{errors[0] || ''}</ControlErrorMessage>
    </MainContainer>
  );
};
