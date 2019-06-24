import { Value } from './Value';

export interface FormControl {
  value: string;
  onChange?: (value: Value) => void;
  errorMessage?: string;
  name?: string;
}
