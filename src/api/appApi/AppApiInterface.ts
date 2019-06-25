import { SignInRequestModel, SignInResponseModel } from '../models';

export interface AppApiInterface {
  signIn: (form: SignInRequestModel) => Promise<SignInResponseModel>;
}
