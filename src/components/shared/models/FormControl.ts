export interface FormControl<TInputValue, TOutputValue> {
  value: TInputValue;
  onChange?: (value: TOutputValue) => void;
  errorMessage?: string;
  name?: string; // TODO: is it necessary ?
}
