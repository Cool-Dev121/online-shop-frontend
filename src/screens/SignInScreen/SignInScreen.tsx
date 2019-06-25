import * as React from 'react';
import { styled, Card } from '../../components';
import { SignInForm } from './SignInForm';

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  @media (max-width: ${props => props.theme.gridOptions.md}px) {
    width: 50%;
  }
  @media (max-width: ${props => props.theme.gridOptions.sm}px) {
    width: 100%;
  }
`;

export const SignInScreen = (): JSX.Element => (
  <MainContainer>
    <CardContainer>
      <Card renderContent={() => <SignInForm />} />
    </CardContainer>
  </MainContainer>
);
