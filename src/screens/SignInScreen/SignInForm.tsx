import React from 'react';
import { connect } from 'react-redux';
import {
  Form, FormDescription, Input, Button,
} from '../../components';
import { SignInFormModel } from '../../shared';
import { requestSignInActionCreator, AppDispatch } from '../../store';

enum FormFields {
  Email = 'email',
  Password = 'password',
  Submit = 'submit',
}

const formDescription: FormDescription = {
  [FormFields.Email]: {
    renderControl: (control): JSX.Element => {
      const { errorMessage, handleChange, value } = control;
      return (
        <Input
          title="Email"
          name={FormFields.Email}
          value={value}
          onChange={handleChange}
          errorMessage={errorMessage}
        />
      );
    },
  },
  [FormFields.Password]: {
    renderControl: (control): JSX.Element => {
      const { errorMessage, handleChange, value } = control;
      return (
        <Input
          title="Password"
          name={FormFields.Email}
          value={value}
          onChange={handleChange}
          errorMessage={errorMessage}
        />
      );
    },
  },
  [FormFields.Submit]: {
    renderControl: (_, form) => {
      const { isFormValid } = form;
      return (
        <Button type="submit" disabled={!isFormValid}>
          Submit
        </Button>
      );
    },
  },
};

interface DispatchProps {
  signIn: (form: SignInFormModel) => void;
}
type Props = DispatchProps;

export const SignInFormInner = (props: Props): JSX.Element => {
  const { signIn } = props;
  return <Form formDescription={formDescription} onSubmit={signIn} title="Sign In" />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signIn: (form: SignInFormModel) => {
    dispatch(requestSignInActionCreator(form));
  },
});

export const SignInForm = connect(
  null,
  mapDispatchToProps,
)(SignInFormInner);
