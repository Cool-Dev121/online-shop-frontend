import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input, Button, areEqual, FormControlValidators, Form,
} from '../../components';
import { SignUpFormModel } from '../../shared';
import { AppDispatch, requestSignUpActionCreator } from '../../store';

enum FormFields {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
  Submit = 'submit',
}

const formControlValidators: FormControlValidators<SignUpFormModel> = {
  [FormFields.Email]: [],
  [FormFields.Password]: [],
  [FormFields.ConfirmPassword]: [
    {
      errorMessage: 'Passwords are not equal',
      isValid: areEqual(FormFields.Password),
    },
  ],
  [FormFields.Submit]: [],
};

interface DispatchProps {
  signUp: (form: SignUpFormModel) => void;
}
type Props = DispatchProps;

export const SignUpFormInner = (props: Props): JSX.Element => {
  const { signUp } = props;
  return (
    <Form
      formControlValidators={formControlValidators}
      onSubmit={signUp}
      title="Sign Up"
      renderFormInner={(form, errors, handleChange, isFormValid) => (
        <Fragment>
          <Input
            title="Email"
            name={FormFields.Email}
            value={form[FormFields.Email]}
            onChange={value => handleChange(FormFields.Email, value)}
            errorMessage={errors[FormFields.Email]}
          />
          <Input
            title="Password"
            name={FormFields.Password}
            value={form[FormFields.Password]}
            onChange={value => handleChange(FormFields.Password, value)}
            errorMessage={errors[FormFields.Password]}
          />
          <Input
            title="Confirm password"
            name={FormFields.ConfirmPassword}
            value={form[FormFields.ConfirmPassword]}
            onChange={value => handleChange(FormFields.ConfirmPassword, value)}
            errorMessage={errors[FormFields.ConfirmPassword]}
          />
          <Button type="submit" disabled={!isFormValid}>
            Sign In
          </Button>
        </Fragment>
      )}
    />
  );
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
