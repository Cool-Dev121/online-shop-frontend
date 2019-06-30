import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input, Button, Form, FormControlValidators, useForm,
} from '../../components';
import { requestSignInActionCreator, AppDispatch } from '../../store';
import { SignInFormModel } from '../../shared';

enum FormFields {
  Email = 'email',
  Password = 'password',
  Submit = 'submit',
}

const formControlValidators: FormControlValidators<SignInFormModel> = {
  [FormFields.Email]: [],
  [FormFields.Password]: [],
  [FormFields.Submit]: [],
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
