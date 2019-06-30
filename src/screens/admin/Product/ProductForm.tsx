import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import {
  Input,
  Button,
  ImageUploader,
  maxLengthVaidator,
  minLengthVaidator,
  isRequiredValidator,
  ResponsiveContainer,
  Form,
  FormControlValidators,
  useForm,
  FormV2,
} from '../../../components';
import { ProductFormModel } from '../../../shared';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

enum FormFields {
  ProductName = 'productName',
  Price = 'price',
  Image = 'image',
  Submit = 'submit',
}

const formControlValidators: FormControlValidators<ProductFormModel> = {
  [FormFields.ProductName]: [
    {
      errorMessage: 'Name is required',
      isValid: isRequiredValidator(),
    },
    {
      errorMessage: 'Name is too long',
      isValid: maxLengthVaidator(20),
    },
    {
      errorMessage: 'Name is too short',
      isValid: minLengthVaidator(3),
    },
  ],
  [FormFields.Price]: [],
  [FormFields.Image]: [
    // {
    //   errorMessage: 'Image is required',
    //   isValid: isRequiredValidator(),
    // },
  ],
  [FormFields.Submit]: [],
};

interface Props {
  onSubmit: (form: ProductFormModel) => void;
  initValue?: ProductFormModel;
  title: string;
}

export const ProductForm = (props: Props): JSX.Element => {
  const { onSubmit, initValue, title } = props;

  const {
    formValues, handleChange, isFormValid, handleSubmit, getCurrentError,
  } = useForm(
    onSubmit,
    formControlValidators,
    initValue || ({} as ProductFormModel),
  );

  return (
    <MainContainer>
      <ResponsiveContainer>
        <FormV2 title={title}>
          <Fragment>
            <Input
              title="Name"
              placeholder="Name"
              value={formValues[FormFields.ProductName]}
              onChange={value => handleChange(FormFields.ProductName, value)}
              errorMessage={getCurrentError(FormFields.ProductName)}
            />
            <Input
              title="Price"
              value={formValues[FormFields.Price]}
              onChange={value => handleChange(FormFields.Price, value)}
              errorMessage={getCurrentError(FormFields.Price)}
            />
            <ImageUploader
              value={formValues[FormFields.Image] as string}
              onChange={(value: File) => handleChange(FormFields.Image, value)}
              errorMessage={getCurrentError(FormFields.Image)}
            />
            <Button disabled={!isFormValid} onClick={handleSubmit}>
              Submit
            </Button>
          </Fragment>
        </FormV2>
      </ResponsiveContainer>
    </MainContainer>
  );
};
