import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { styled, Card, ResponsiveContainer } from '../../components';
import { SignInForm } from './SignInForm';
import { AppState, getIsSignedIn } from '../../store';
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
      <ResponsiveContainer
        widthsInPercent={{
          sm: 50,
          md: 100,
          lg: 100,
          xl: 100,
        }}
      >
        <Card renderContent={() => <SignInForm />} />
      </ResponsiveContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state: AppState) => ({ isSignedIn: getIsSignedIn(state) });

export const SignInScreen = connect(mapStateToProps)(SignInScreenInner);
