export type Validator = {
  errorMessage: string;
  isValid: (value: string) => boolean;
};
