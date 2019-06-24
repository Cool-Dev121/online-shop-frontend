import { ValidatorItem } from './ValidatorItem';
import { HandleControlChange } from './HandleControlChange';

export interface FormDescription {
  [key: string]: {
    validatorItems?: ValidatorItem[];
    renderControl: (
      control: {
      value: string;
      handleChange: HandleControlChange;
      errorMessage: string;
      },
      form: {
      isFormValid: boolean;
      },
    ) => JSX.Element;
  };
}
