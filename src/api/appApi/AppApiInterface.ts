import {
  SignInRequestModel,
  SignInResponseModel,
  SignUpRequestModel,
  SignUpResponseModel,
} from '../models';

export interface AppApiInterface {
  signIn: (form: SignInRequestModel) => Promise<SignInResponseModel>;
  signUp: (form: SignUpRequestModel) => Promise<SignUpResponseModel>;
}
