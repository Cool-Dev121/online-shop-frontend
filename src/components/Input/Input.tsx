import React from 'react';
import { styled } from '../themes';
import { bordered, shadowed, FormControl } from '../shared';
import { ControlErrorMessage } from '../ControlErrorMessage';
import { ControlContainer } from '../ControlContainer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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

interface Props extends FormControl {
  title: string;
  placeholder?: string;
}

export const Input = (props: Props) => {
  const {
    title, name, placeholder = '', value, onChange, errorMessage,
  } = props;

  return (
    <ControlContainer>
      <MainContainer>
        <TitleContainer>{title}</TitleContainer>
        <InputComponent
          autoComplete="off"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const { value: targetValue } = event.target;
            if (onChange) {
              onChange(targetValue);
            }
          }}
        />
        <ControlErrorMessage>{errorMessage || ''}</ControlErrorMessage>
      </MainContainer>
    </ControlContainer>
  );
};
