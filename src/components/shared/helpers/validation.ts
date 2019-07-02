import { ValidatorItem, FormControlValidators } from '../models';
import { getKeys } from './object';

const defaultErrorMessage = 'Value is not valid';

export function validate<TForm>(
  value: any,
  form: TForm,
  validatorItems?: ValidatorItem<TForm>[],
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (validatorItems) {
    for (let i = 0; i < validatorItems.length; i++) {
      const { isValid, errorMessage } = validatorItems[i];
      const isValidValue = isValid(value, form);
      if (isValidValue !== undefined && !isValidValue) {
        errors.push(errorMessage || defaultErrorMessage);
      }
    }
  }
  return { isValid: errors.length === 0, errors };
}

export function validateForm<TForm extends any>(
  validators: FormControlValidators<TForm>,
  form: TForm,
): { isValid: boolean; errors: { [key: string]: string[] } } {
  const errors: { [key: string]: string[] } = {};
  let isValid = true;
  getKeys(validators).forEach((key) => {
    const validationResult = validate(form[key], form, validators[key]);
    isValid = isValid && validationResult.isValid;
    errors[key] = validationResult.errors;
  });
  return { isValid, errors };
}
