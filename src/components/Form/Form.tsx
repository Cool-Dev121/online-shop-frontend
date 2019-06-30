import React from 'react';
import { styled } from '../themes';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.lg}px;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Form(props: Props): JSX.Element {
  const { title, children } = props;

  return (
    <MainContainer>
      {title && <FormTitleContainer>{title}</FormTitleContainer>}
      {children}
    </MainContainer>
  );
}
