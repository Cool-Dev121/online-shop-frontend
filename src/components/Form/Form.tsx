import React, { useEffect, useState } from 'react';
import { styled } from '../themes';
import {
  removeKey,
  getKeys,
  FormControlValidators,
  validateForm,
  HandleControlChange,
  validate,
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
  formControlValidators: FormControlValidators<TForm>;
  title?: string;
  initValue?: TForm;
  renderFormInner: (
    form: {
    formValue: TForm;
    errors: { [key: string]: string };
    isValid: boolean;
    },
    handleChange: (key: string, value: any) => void,
  ) => JSX.Element;
}

export function Form<TForm extends any>(props: Props<TForm>): JSX.Element {
  const {
    onSubmit, formControlValidators, title, initValue, renderFormInner,
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
    const res = validateForm(formControlValidators, form);
    setIsFormValid(res);
  }, [form]);

  useEffect(() => {
    setForm(initValueInner);
  }, [initValue]);

  const handleChange: HandleControlChange = (name: string, value: any) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    const validationResult = validate(value, updatedForm, formControlValidators[name]);
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
            return;
          }
          onSubmit(form);
        }}
      >
        {renderFormInner({ formValue: form, errors, isValid: isFormValid }, handleChange)}
      </FormInner>
    </MainContainer>
  );
}

interface Props2 {
  title: string;
  children: React.ReactNode;
}

export function FormV2(props: Props2): JSX.Element {
  const { title, children } = props;

  return (
    <MainContainer>
      {title && <FormTitleContainer>{title}</FormTitleContainer>}
      {children}
    </MainContainer>
  );
}
