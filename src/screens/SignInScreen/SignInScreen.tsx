import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { styled, Card } from '../../components';
import { SignInForm } from './SignInForm';
import { AppState } from '../../store';
import { SignUpButton } from './SignUpButton';

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const SignUpButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${props => props.theme.padding.md}px;
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

type OwnProps = RouteComponentProps;

interface StateProps {
  isSignedIn: boolean;
}
type Props = OwnProps & StateProps;

export const SignInScreenInner = (props: Props): JSX.Element => {
  const { isSignedIn, location } = props;

  const redirectTo = location.state || '/';

  if (isSignedIn) return <Redirect to={redirectTo} />;

  return (
    <MainContainer>
      <SignUpButtonContainer>
        <SignUpButton />
      </SignUpButtonContainer>
      <CardContainer>
        <Card renderContent={() => <SignInForm />} />
      </CardContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state: AppState) => {
  const { app } = state;
  return { isSignedIn: app.isSignedIn };
};

export const SignInScreen = connect(mapStateToProps)(SignInScreenInner);
