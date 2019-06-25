import { ValidatorItem } from './ValidatorItem';
import { HandleControlChange } from './HandleControlChange';

export interface FormDescription<TForm> {
  [key: string]: {
    validatorItems?: ValidatorItem<TForm>[];
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
