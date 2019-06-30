import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Input, Button, Form, FormControlValidators,
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
  return (
    <Form
      formControlValidators={formControlValidators}
      onSubmit={signIn}
      title="Sign In"
      renderFormInner={(form, handleChange) => {
        const { formValue, errors, isValid } = form;
        return (
          <Fragment>
            <Input
              title="Email"
              name={FormFields.Email}
              value={formValue[FormFields.Email]}
              onChange={value => handleChange(FormFields.Email, value)}
              errorMessage={errors[FormFields.Email]}
            />
            <Input
              title="Password"
              name={FormFields.Password}
              value={formValue[FormFields.Password]}
              onChange={value => handleChange(FormFields.Password, value)}
              errorMessage={errors[FormFields.Password]}
            />
            <Button type="submit" disabled={!isValid}>
              Sign In
            </Button>
          </Fragment>
        );
      }}
    />
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
