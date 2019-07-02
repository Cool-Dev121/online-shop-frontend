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

const SelectComponent = styled.select`
  padding: ${props => props.theme.padding.sm}px ${props => props.theme.padding.lg}px;
  outline: none;
  box-sizing: border-box;
  font-size: ${props => props.theme.fontSize.md}px;
  width: 100%;
  ${props => bordered(props.theme)}
  ${shadowed}
`;

interface Props extends FormControl<string | number, string | number> {
  collection: { id: string | number; text: string }[];
  placeholder?: string;
  title?: string;
}

export const Selectbox = (props: Props) => {
  const {
    title = '', placeholder = '', value, onChange, errorMessage, collection,
  } = props;

  const [valueInner, setValueInner] = useState(value);

  useEffect(() => {
    setValueInner(value);
  }, [value]);

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <SelectComponent
        autoComplete="off"
        placeholder={placeholder}
        value={valueInner}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const { value: targetValue } = event.target;
          setValueInner(targetValue);
          if (onChange) {
            onChange(targetValue);
          }
        }}
      >
        <option value="" hidden>
          {placeholder}
        </option>
        {collection.map(item => (
          <option key={item.id} value={item.id}>
            {item.text}
          </option>
        ))}
      </SelectComponent>
      <ControlErrorMessage>{errorMessage || ''}</ControlErrorMessage>
    </MainContainer>
  );
};
