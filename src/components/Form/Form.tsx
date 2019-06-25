import React, { Fragment, useEffect, useState } from 'react';
import { styled } from '../themes';
import {
  removeKey,
  validate,
  getKeys,
  FormDescription,
  validateForm,
  HandleControlChangeExpanded,
  Value,
} from '../shared';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.lg}px;
`;

const FormInner = styled.form`
  width: 100%;
`;

interface Props<TForm extends any> {
  onSubmit: (form: TForm) => void;
  formDescription: FormDescription<TForm>;
  title?: string;
  initValue?: TForm;
}

export function Form<TForm extends any>(props: Props<TForm>): JSX.Element {
  const {
    onSubmit, formDescription, title, initValue,
  } = props;

  const initValueInner: any = initValue || {};
  const [form, setForm] = useState(initValueInner);

  const errorsInit: { [key: string]: string } = {};
  const [errors, setErrors] = useState(errorsInit);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(getKeys(errors).length === 0);
  }, [errors]);

  useEffect(() => {
    setIsFormValid(validateForm(formDescription, form));
  }, [form]);

  useEffect(() => {
    setForm(initValueInner);
  }, [initValue]);

  const handleChange: HandleControlChangeExpanded = (value: Value, name: string) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    const validationResult = validate(
      value.toString(),
      updatedForm,
      formDescription[name].validatorItems,
    );
    if (!validationResult.isValid) {
      setErrors({ ...errors, [name]: validationResult.errors[0] });
    } else if (errors[name]) {
      setErrors(removeKey(errors, name));
    }
  };

  return (
    <MainContainer>
      {title && <FormTitleContainer>{title}</FormTitleContainer>}
      <FormInner
        onSubmit={(event) => {
          event.preventDefault();
          if (!isFormValid) {
            console.log('FORM IS NOT VALID');
            return;
          }
          onSubmit(form);
        }}
      >
        {Object.keys(formDescription).map(name => (
          <Fragment key={name}>
            {formDescription[name].renderControl(
              {
                value: form[name],
                handleChange: value => handleChange(value, name),
                errorMessage: errors[name],
              },
              { isFormValid },
            )}
          </Fragment>
        ))}
      </FormInner>
    </MainContainer>
  );
}
