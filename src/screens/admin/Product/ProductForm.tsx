import React from 'react';
import styled from 'styled-components';
import {
  Input,
  Button,
  FormDescription,
  Form,
  ImageUploader,
  maxLengthVaidator,
  minLengthVaidator,
} from '../../../components';
import { ProductFormModel } from '../../../shared';

const MainContainer = styled.div``;

enum FormFields {
  ProductName = 'productName',
  Price = 'price',
  Image = 'imagePath',
  Submit = 'submit',
}

const formDescription: FormDescription = {
  [FormFields.ProductName]: {
    validatorItems: [
      {
        errorMessage: 'Name is too long',
        isValid: maxLengthVaidator(20),
      },
      {
        errorMessage: 'Name is too short',
        isValid: minLengthVaidator(3),
      },
    ],
    renderControl: (control): JSX.Element => {
      const { value, handleChange, errorMessage } = control;
      return (
        <Input
          title="Name"
          name={FormFields.ProductName}
          placeholder="Name"
          value={value}
          onChange={handleChange}
          errorMessage={errorMessage}
        />
      );
    },
  },
  [FormFields.Price]: {
    validatorItems: [],
    renderControl: (control): JSX.Element => {
      const { value, handleChange, errorMessage } = control;
      return (
        <Input
          title="Price"
          name={FormFields.Price}
          value={value}
          onChange={handleChange}
          errorMessage={errorMessage}
        />
      );
    },
  },
  [FormFields.Image]: {
    renderControl: (control) => {
      const { value, handleChange, errorMessage } = control;
      return (
        <ImageUploader
          name={FormFields.Image}
          value={value}
          onChange={(file) => {
            handleChange(file);
            console.log('IMAGE', file, (file as any).name);
          }}
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

interface ProductFormProps {
  onSubmit: (form: ProductFormModel) => void;
  initValue?: ProductFormModel;
  title: string;
}

export const ProductForm = (props: ProductFormProps): JSX.Element => {
  const { onSubmit, initValue, title } = props;
  return (
    <MainContainer>
      <Form
        formDescription={formDescription}
        onSubmit={onSubmit}
        title={title}
        initValue={initValue}
      />
    </MainContainer>
  );
};
