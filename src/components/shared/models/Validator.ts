export type Validator<TForm extends any> = (value: string, form: TForm) => boolean | void;
