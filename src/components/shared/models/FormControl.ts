export interface FormControl<TOutputValue> {
  value: string;
  onChange?: (value: TOutputValue) => void;
  errorMessage?: string;
  name?: string;
}
