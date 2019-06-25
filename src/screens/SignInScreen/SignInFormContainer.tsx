import React from 'react';
import { connect } from 'react-redux';
import { SignInFormModel } from '../../shared';
import { SignInForm } from './SignInForm';
import { AppDispatch, requestSignInActionCreator } from '../../store';

interface DispatchProps {
  signIn: (form: SignInFormModel) => void;
}
type Props = DispatchProps;

const SignInFormContainerInner = (props: Props): JSX.Element => {
  const { signIn } = props;
  return <SignInForm onSubmit={signIn} />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signIn: (form: SignInFormModel) => {
    dispatch(requestSignInActionCreator(form));
  },
});

export const SignInFormContainer = connect(
  null,
  mapDispatchToProps,
)(SignInFormContainerInner);
