import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { ProductFormModel } from './models';
import { Input, Button, removeKey } from '../../../components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  flex: 0.5;
`;

const defaultErrorMessage = 'Value is not valid';

enum FormFields {
  ProductName = 'productName',
  Price = 'price',
}

interface Props {
  onSubmit: (form: ProductFormModel) => void;
  formInit: ProductFormModel;
}

type Validators = {
  [key: string]: {
    message: string;
    isValid: (value: string) => boolean; //  ((value: string) => boolean) | ((value: number) => boolean);
  }[];
};

const validators: Validators = {
  [FormFields.ProductName]: [
    {
      message: 'Name is too long',
      isValid: (value: string) => {
        const maxLength = 20;
        const isValid = !(value.length > maxLength);
        return isValid;
      },
    },
    {
      message: 'Name is too short',
      isValid: (value: string) => {
        const minLength = 3;
        const isValid = !(value.length <= minLength);
        return isValid;
      },
    },
  ],
};

const validate = (
  validators: Validators,
  name: string,
  value: string,
  defaultErrorMessage: string,
): { isValid: boolean; error: string | null } => {
  const fieldValidators = validators[name];
  const isValidResult = { isValid: true, error: null };
  if (fieldValidators) {
    for (let i = 0; i < fieldValidators.length; i++) {
      const { isValid, message } = fieldValidators[i]; // (value); // .isValid(value);
      if (!isValid(value)) {
        return {
          isValid: false,
          error: message || defaultErrorMessage,
        };
      }
    }
  }
  return isValidResult;
};

const handleChange = (form: ProductFormModel, name: string, value: string): ProductFormModel => ({
  ...form,
  [name]: value,
});

// const validate = (
//   form: ProductFormModel,
// ): { result: boolean; errors?: { [key: string]: string } } => ({ result: true, errors: {} });

export const ProductForm = (props: Props): JSX.Element => {
  const { onSubmit, formInit } = props;

  const [form, setForm] = useState(formInit);

  const initErrors: { [key: string]: string } = {};
  const [errors, setErrors] = useState(initErrors);

  React.useEffect(() => {
    console.log('ERROR', errors);
  }, [errors]);

  return (
    <MainContainer>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (Object.keys(errors).length > 0) {
            console.log('Form not valid');
            return;
          }
          onSubmit(form);
        }}
      >
        <Input
          title="Name"
          name={FormFields.ProductName}
          placeholder="Name"
          value={form.productName}
          onChange={(name, value) => {
            const validationResult = validate(validators, name, value, defaultErrorMessage);
            console.log('validationResult', validationResult);
            if (!validationResult.isValid) {
              setErrors({ ...errors, [name]: validationResult.error! });
            } else {
              setErrors(removeKey(errors, FormFields.ProductName.toString()));
            }
            setForm(handleChange(form, name, value));
          }}
          errorMessage={errors[FormFields.ProductName]}
        />
        <Input
          title="Price"
          name={FormFields.Price}
          value={form.price}
          onChange={(name, value) => setForm(handleChange(form, name, value))}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </MainContainer>
  );
};
