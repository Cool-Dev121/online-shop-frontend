import {
  SignInRequestModel,
  SignInResponseModel,
  SignUpRequestModel,
  SignUpResponseModel
} from '../models';

export interface AuthApiInterface {
  signIn: (form: SignInRequestModel) => Promise<SignInResponseModel>;
  signUp: (form: SignUpRequestModel) => Promise<SignUpResponseModel>;
}
