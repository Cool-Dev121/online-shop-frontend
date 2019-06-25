import { Validator } from './Validator';

export type ValidatorItem<TForm> = {
  errorMessage: string;
  isValid: Validator<TForm>;
};
