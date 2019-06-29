export interface FormControl {
  value: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  name?: string;
}
