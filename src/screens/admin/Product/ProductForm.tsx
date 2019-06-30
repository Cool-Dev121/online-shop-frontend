import React, { Fragment } from 'react';
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
  return (
    <MainContainer>
      <ResponsiveContainer>
        <Form
          formControlValidators={formControlValidators}
          onSubmit={onSubmit}
          title={title}
          initValue={initValue}
          renderFormInner={(form, handleChange) => {
            const { formValue, errors, isValid } = form;
            return (
              <Fragment>
                <Input
                  title="Name"
                  name={FormFields.ProductName}
                  placeholder="Name"
                  value={formValue[FormFields.ProductName]}
                  onChange={value => handleChange(FormFields.ProductName, value)}
                  errorMessage={errors[FormFields.ProductName]}
                />
                <Input
                  title="Price"
                  name={FormFields.Price}
                  value={formValue[FormFields.Price]}
                  onChange={value => handleChange(FormFields.Price, value)}
                  errorMessage={errors[FormFields.Price]}
                />
                <ImageUploader
                  name={FormFields.Image}
                  value={formValue[FormFields.Image] as string}
                  onChange={(value: File) => handleChange(FormFields.Image, value)}
                  errorMessage={errors[FormFields.Image]}
                />
                <Button type="submit" disabled={!isValid}>
                  Submit
                </Button>
              </Fragment>
            );
          }}
        />
      </ResponsiveContainer>
    </MainContainer>
  );
};
