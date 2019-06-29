import { ValidatorItem } from './ValidatorItem';

export interface FormControlValidators<TForm> {
  [key: string]: ValidatorItem<TForm>[];
}
