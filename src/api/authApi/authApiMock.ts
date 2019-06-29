import {
  SignInRequestModel,
  SignInResponseModel,
  SignUpRequestModel,
  SignUpResponseModel
} from '../models';
import { AuthApiInterface } from './AuthApiInterface';

export const authApiMock: AuthApiInterface = {
  signIn(form: SignInRequestModel): Promise<SignInResponseModel> {
    return new Promise(res => {
      setTimeout(() => {
        res({
          token: 'test_token'
        });
      }, 300);
    });
  },
  signUp(form: SignUpRequestModel): Promise<SignUpResponseModel> {
    return new Promise(res => {
      setTimeout(() => {
        res({
          result: true
        });
      }, 300);
    });
  }
};
