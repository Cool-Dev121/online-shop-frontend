import { Validator, FormDescription } from '../models';
import { getKeys } from './object';

const defaultErrorMessage = 'Value is not valid';

export const validate = (
  value: string,
  validators?: Validator[],
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  if (validators) {
    for (let i = 0; i < validators.length; i++) {
      const { isValid, errorMessage } = validators[i];
      if (!isValid(value)) {
        errors.push(errorMessage || defaultErrorMessage);
      }
    }
  }
  return { isValid: errors.length === 0, errors };
};

export function validateForm(formDescription: FormDescription): boolean {
  return getKeys(formDescription)
    .map((k) => {
      const control = formDescription[k];
      return validate(control.initValue!, control.validators);
    })
    .map(validationResult => validationResult.isValid)
    .reduce((prev, curr) => prev && curr, true);
}
