import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  Button,
  areEqual,
  FormControlValidators,
  Form,
  useForm,
  isRequiredValidator,
  minLengthVaidator,
  maxLengthVaidator,
} from '../../components';
import { SignUpFormModel } from '../../shared';
import { AppDispatch, requestSignUpActionCreator } from '../../store';

enum FormFields {
  Login = 'login',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
  Submit = 'submit',
}

const formControlValidators: FormControlValidators<SignUpFormModel> = {
  [FormFields.Login]: [
    {
      isValid: isRequiredValidator(),
      errorMessage: 'Login is required',
    },
    {
      isValid: minLengthVaidator(3),
      errorMessage: 'Login is too short',
    },
    {
      isValid: maxLengthVaidator(20),
      errorMessage: 'Login is too long',
    },
  ],
  [FormFields.Password]: [
    {
      isValid: isRequiredValidator(),
      errorMessage: 'Password is required',
    },
    {
      isValid: minLengthVaidator(3),
      errorMessage: 'Password is too short',
    },
    {
      isValid: maxLengthVaidator(20),
      errorMessage: 'Password is too long',
    },
  ],
  [FormFields.ConfirmPassword]: [
    {
      errorMessage: 'Passwords are not equal',
      isValid: areEqual(FormFields.Password),
    },
  ],
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
          value={formValues[FormFields.Login]}
          onChange={value => handleChange(FormFields.Login, value)}
          errorMessage={getCurrentError(FormFields.Login)}
        />
        <Input
          title="Password"
          value={formValues[FormFields.Password]}
          onChange={value => handleChange(FormFields.Password, value)}
          errorMessage={getCurrentError(FormFields.Password)}
          type="password"
        />
        <Input
          title="Confirm password"
          value={formValues[FormFields.ConfirmPassword]}
          onChange={value => handleChange(FormFields.ConfirmPassword, value)}
          errorMessage={getCurrentError(FormFields.ConfirmPassword)}
          type="password"
        />
        <Button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
          Sign Up
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
