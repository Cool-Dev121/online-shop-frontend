import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input, Button, areEqual, FormControlValidators, Form, useForm,
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
  const {
    formValues, handleChange, isFormValid, handleSubmit, getCurrentError,
  } = useForm(
    signUp,
    formControlValidators,
  );
  return (
    <Form title="Sign Up">
      <Fragment>
        <Input
          title="Email"
          value={formValues[FormFields.Email]}
          onChange={value => handleChange(FormFields.Email, value)}
          errorMessage={getCurrentError(FormFields.Email)}
        />
        <Input
          title="Password"
          value={formValues[FormFields.Password]}
          onChange={value => handleChange(FormFields.Password, value)}
          errorMessage={getCurrentError(FormFields.Password)}
        />
        <Input
          title="Confirm password"
          value={formValues[FormFields.ConfirmPassword]}
          onChange={value => handleChange(FormFields.ConfirmPassword, value)}
          errorMessage={getCurrentError(FormFields.ConfirmPassword)}
        />
        <Button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
          Sign In
        </Button>
      </Fragment>
    </Form>
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
