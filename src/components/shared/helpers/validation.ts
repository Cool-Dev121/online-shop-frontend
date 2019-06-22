import { Validator } from '../models';

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
