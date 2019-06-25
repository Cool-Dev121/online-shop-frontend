import React from 'react';
import {
  styled, Form, FormDescription, Input, Button,
} from '../../components';
import { SignInFormModel } from '../../shared';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

interface Props {
  onSubmit: (form: SignInFormModel) => void;
}
export const SignInForm = (props: Props): JSX.Element => {
  const { onSubmit } = props;
  return (
    <MainContainer>
      <Form formDescription={formDescription} onSubmit={onSubmit} title="Sign In" />
    </MainContainer>
  );
};
