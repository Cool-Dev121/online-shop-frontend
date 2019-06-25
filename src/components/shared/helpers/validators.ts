import { Validator } from '../models';

export function maxLengthVaidator<TForm extends any>(maxLength: number): Validator<TForm> {
  return (value: string, form: TForm) => {
    const isValid = value === undefined || value === null ? false : !(value.length > maxLength);
    return isValid;
  };
}

export function minLengthVaidator<TForm extends any>(minLength: number): Validator<TForm> {
  return (value: string, form: TForm) => {
    const isValid = value === undefined || value === null ? false : !(value.length < minLength);
    return isValid;
  };
}
export function isRequiredValidator<TForm extends any>(): Validator<TForm> {
  return (value: string, form: TForm) => !!value;
}

export function areEqual<TForm extends any>(control: string): Validator<TForm> {
  return (value1: string, form: TForm) => value1 === form[control];
}
