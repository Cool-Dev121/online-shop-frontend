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
      if (!isValid(value, form)) {
        errors.push(errorMessage || defaultErrorMessage);
      }
    }
  }
  return { isValid: errors.length === 0, errors };
}

export function validateForm<TForm extends any>(
  validators: FormControlValidators<TForm>,
  form: TForm,
): boolean {
  return getKeys(validators)
    .map(k => validate(form[k], form, validators[k]))
    .map(validationResult => validationResult.isValid)
    .reduce((prev, curr) => prev && curr, true);
}
