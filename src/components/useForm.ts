import { useState, useEffect } from 'react';
import { FormControlValidators, validateForm, getKeys } from './shared';

type FormDescription<TDescription> = { [key: string]: TDescription };

export function useForm<TForm extends object>(
  onSubmit: (form: TForm) => void,
  formControlValidators: FormControlValidators<TForm>,
  initValue?: TForm,
) {
  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    onSubmit(formValues);
  };

  const initFormValues: TForm = initValue || ({} as TForm);
  const [formValues, setFormValues] = useState<TForm>(initFormValues);

  const errorsInit: FormDescription<string[]> = {};
  const [errors, setErrors] = useState(errorsInit);

  const [isFormValid, setIsFormValid] = useState(false);

  const dirtinessInit: FormDescription<boolean> = {};
  const [isDirty, setIsDirty] = useState(dirtinessInit);

  useEffect(() => {
    setFormValues(initFormValues);
  }, [getKeys(initFormValues).length]);

  useEffect(() => {
    const validationResult = validateForm(formControlValidators, formValues);
    setIsFormValid(validationResult.isValid);
    setErrors(validationResult.errors);
  }, [formValues]);

  const handleChange = (key: string, value: any) => {
    setIsDirty({ ...isDirty, [key]: true });
    setFormValues({ ...formValues, [key]: value });
  };

  const getCurrentError = (key: string) => (errors[key] && isDirty[key] ? errors[key][0] : '');

  return {
    handleChange,
    handleSubmit,
    formValues,
    isFormValid,
    getCurrentError,
  };
}
