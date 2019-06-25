import { ValidatorItem, FormDescription } from '../models';
import { getKeys } from './object';

const defaultErrorMessage = 'Value is not valid';

export function validate<TForm>(
  value: string,
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
  formDescription: FormDescription<TForm>,
  form: TForm,
): boolean {
  return getKeys(formDescription)
    .map((k) => {
      const control = formDescription[k];
      return validate(form[k], form, control.validatorItems);
    })
    .map(validationResult => validationResult.isValid)
    .reduce((prev, curr) => prev && curr, true);
}
