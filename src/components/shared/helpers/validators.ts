import { Validator } from '../models';

export const maxLengthVaidator = (maxLength: number): Validator => (value: string) => {
  const isValid = value === undefined || value === null ? false : !(value.length > maxLength);
  return isValid;
};

export const minLengthVaidator = (minLength: number): Validator => (value: string) => {
  const isValid = value === undefined || value === null ? false : !(value.length < minLength);
  return isValid;
};
