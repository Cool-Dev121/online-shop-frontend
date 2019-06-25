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
  isRequiredValidator,
} from '../../../components';
import { ProductFormModel } from '../../../shared';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  @media (min-width: 0px) {
    width: 100%;
  }
  @media (min-width: ${props => props.theme.gridOptions.sm}px) {
    width: 90%;
  }
  @media (min-width: ${props => props.theme.gridOptions.md}px) {
    width: 50%;
  }
  @media (min-width: ${props => props.theme.gridOptions.lg}px) {
    width: 50%;
  }
  @media (min-width: ${props => props.theme.gridOptions.xl}px) {
    width: 30%;
  }
`;

enum FormFields {
  ProductName = 'productName',
  Price = 'price',
  Image = 'image',
  Submit = 'submit',
}

const formDescription: FormDescription<ProductFormModel> = {
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
    validatorItems: [
      {
        errorMessage: 'Image is required',
        isValid: isRequiredValidator(),
      },
    ],
    renderControl: (control) => {
      const { value, handleChange, errorMessage } = control;
      return (
        <ImageUploader
          name={FormFields.Image}
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
  onSubmit: (form: ProductFormModel) => void;
  initValue?: ProductFormModel;
  title: string;
}

export const ProductForm = (props: Props): JSX.Element => {
  const { onSubmit, initValue, title } = props;
  return (
    <MainContainer>
      <FormContainer>
        <Form
          formDescription={formDescription}
          onSubmit={onSubmit}
          title={title}
          initValue={initValue}
        />
      </FormContainer>
    </MainContainer>
  );
};
