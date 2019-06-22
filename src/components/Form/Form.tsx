import React, { Fragment, useEffect, useState } from 'react';
import { styled } from '../themes';
import {
  removeKey,
  validate,
  getKeys,
  FormDescription,
  HandleControlChange,
  validateForm,
} from '../shared';

const FormInner = styled.form`
  /* flex: 0.5; */
`;

interface Props<TForm> {
  onSubmit: (form: TForm) => void;
  formDescription: FormDescription;
}

export function Form<TForm extends any>(props: Props<TForm>): JSX.Element {
  const { onSubmit, formDescription } = props;

  const initForm: any = {};
  const [form, setForm] = useState(initForm);

  const errorsInit: { [key: string]: string } = {};
  const [errors, setErrors] = useState(errorsInit);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(getKeys(errors).length === 0);
  }, [errors]);

  useEffect(() => {
    setIsFormValid(validateForm(formDescription));
  }, []);

  const handleChange: HandleControlChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
    const validationResult = validate(value, formDescription[name].validators);
    if (!validationResult.isValid) {
      setErrors({ ...errors, [name]: validationResult.errors[0] });
    } else if (errors[name]) {
      setErrors(removeKey(errors, name));
    }
  };

  return (
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
            { value: form[name], handleChange, errorMessage: errors[name] },
            { isFormValid },
          )}
        </Fragment>
      ))}
    </FormInner>
  );
}
