import { Validator } from '../models';

const isNoValue = (value: string) => value === undefined || value === null;

export function maxLengthVaidator<TForm extends any>(maxLength: number): Validator<TForm> {
  return (value: string, form: TForm) => {
    if (isNoValue(value)) {
      return;
    }
    return !(value.length > maxLength);
  };
}

export function minLengthVaidator<TForm extends any>(minLength: number): Validator<TForm> {
  return (value: string, form: TForm) => {
    if (isNoValue(value)) {
      return;
    }
    return !(value.length < minLength);
  };
}

export function isRequiredValidator<TForm extends any>(): Validator<TForm> {
  return (value: string, form: TForm) => !(value === undefined || value === null || value === '');
}

export function areEqual<TForm extends any>(control: string): Validator<TForm> {
  return (value1: string, form: TForm) => value1 === form[control];
}
