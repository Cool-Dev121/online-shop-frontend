import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  Button,
  Form,
  FormControlValidators,
  useForm,
  isRequiredValidator,
  minLengthVaidator,
  maxLengthVaidator,
} from '../../components';
import { requestSignInActionCreator, AppDispatch } from '../../store';
import { SignInFormModel } from '../../shared';

enum FormFields {
  Login = 'login',
  Password = 'password',
  Submit = 'submit',
}

const formControlValidators: FormControlValidators<SignInFormModel> = {
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
};

interface DispatchProps {
  signIn: (form: SignInFormModel) => void;
}
type Props = DispatchProps;

export const SignInFormInner = (props: Props): JSX.Element => {
  const { signIn } = props;
  const {
    formValues, handleChange, isFormValid, handleSubmit, getCurrentError,
  } = useForm(
    signIn,
    formControlValidators,
  );

  return (
    <Form title="Sign In">
      <Fragment>
        <Input
          title="Login"
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
        <Button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
          Sign In
        </Button>
      </Fragment>
    </Form>
  );
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
