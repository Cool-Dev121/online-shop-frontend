export type ValidatorItem = {
  errorMessage: string;
  isValid: (value: string) => boolean;
};
