import React from 'react';
import { connect } from 'react-redux';
import {
  Form, FormDescription, Input, Button, areEqual,
} from '../../components';
import { SignUpFormModel } from '../../shared';
import { AppDispatch, requestSignUpActionCreator } from '../../store';

enum FormFields {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
  Submit = 'submit',
}

const formDescription: FormDescription<SignUpFormModel> = {
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
  [FormFields.ConfirmPassword]: {
    validatorItems: [
      {
        errorMessage: 'Passwords are not equal',
        isValid: areEqual(FormFields.Password),
      },
    ],
    renderControl: (control): JSX.Element => {
      const { errorMessage, handleChange, value } = control;
      return (
        <Input
          title="Confirm password"
          name={FormFields.ConfirmPassword}
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
          Sign Up
        </Button>
      );
    },
  },
};

interface DispatchProps {
  signUp: (form: SignUpFormModel) => void;
}
type Props = DispatchProps;

export const SignUpFormInner = (props: Props): JSX.Element => {
  const { signUp } = props;
  return <Form formDescription={formDescription} onSubmit={signUp} title="Sign Up" />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signUp: (form: SignUpFormModel) => {
    dispatch(requestSignUpActionCreator(form));
  },
});

export const SignUpForm = connect(
  null,
  mapDispatchToProps,
)(SignUpFormInner);
