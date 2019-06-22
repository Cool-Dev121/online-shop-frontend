import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { ProductFormModel } from './models';
import { Input, Button, Validator } from '../../../components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  flex: 0.5;
`;

enum FormFields {
  ProductName = 'productName',
  Price = 'price',
}

interface Props {
  onSubmit: (form: ProductFormModel) => void;
  formInit: ProductFormModel;
}

const validators: { [key: string]: Validator[] } = {
  [FormFields.ProductName]: [
    {
      errorMessage: 'Name is too long',
      isValid: (value: string) => {
        const maxLength = 20;
        const isValid = !(value.length > maxLength);
        return isValid;
      },
    },
    {
      errorMessage: 'Name is too short',
      isValid: (value: string) => {
        const minLength = 3;
        const isValid = !(value.length < minLength);
        return isValid;
      },
    },
  ],
};

const handleChange = (form: ProductFormModel, name: string, value: string): ProductFormModel => ({
  ...form,
  [name]: value,
});

export const ProductForm = (props: Props): JSX.Element => {
  const { onSubmit, formInit } = props;

  const [form, setForm] = useState(formInit);

  return (
    <MainContainer>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(form);
        }}
      >
        <Input
          title="Name"
          name={FormFields.ProductName}
          placeholder="Name"
          value={form.productName}
          onChange={(name, value) => {
            setForm(handleChange(form, name, value));
          }}
          validators={validators[FormFields.ProductName]}
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
