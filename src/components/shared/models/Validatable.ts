import { ValidatorItem } from './ValidatorItem';

export interface Validatable<TForm> {
  validatorItems?: ValidatorItem<TForm>[];
}
