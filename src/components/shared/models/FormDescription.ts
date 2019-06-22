import { Validator } from './Validator';
import { HandleControlChange } from './HandleControlChange';

export interface FormDescription {
  [key: string]: {
    initValue?: string;
    validators?: Validator[];
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
