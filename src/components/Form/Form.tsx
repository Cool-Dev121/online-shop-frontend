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

interface Props<TForm> {
  onSubmit: (form: TForm) => void;
  formDescription: FormDescription;
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
    setIsFormValid(validateForm(formDescription));
  }, []);

  const handleChange: HandleControlChangeExpanded = (value: Value, name: string) => {
    setForm({ ...form, [name]: value });
    const validationResult = validate(value.toString(), formDescription[name].validators);
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
