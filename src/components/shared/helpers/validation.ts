import { ValidatorItem, FormDescription } from '../models';
import { getKeys } from './object';

const defaultErrorMessage = 'Value is not valid';

export const validate = (
  value: string,
  validatorItems?: ValidatorItem[],
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  if (validatorItems) {
    for (let i = 0; i < validatorItems.length; i++) {
      const { isValid, errorMessage } = validatorItems[i];
      if (!isValid(value)) {
        errors.push(errorMessage || defaultErrorMessage);
      }
    }
  }
  return { isValid: errors.length === 0, errors };
};

export function validateForm<TForm extends any>(
  formDescription: FormDescription,
  form: TForm,
): boolean {
  return getKeys(formDescription)
    .map((k) => {
      const control = formDescription[k];
      return validate(form[k], control.validatorItems);
    })
    .map(validationResult => validationResult.isValid)
    .reduce((prev, curr) => prev && curr, true);
}
