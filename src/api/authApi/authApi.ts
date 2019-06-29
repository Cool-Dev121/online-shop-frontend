import {
  SignInRequestModel,
  SignInResponseModel,
  SignUpRequestModel,
  SignUpResponseModel,
} from '../models';
import { AuthApiInterface } from './AuthApiInterface';
import { Url } from '../../shared';
import { http } from '../../helpers';

export const authApi: AuthApiInterface = {
  signIn(form: SignInRequestModel): Promise<SignInResponseModel> {
    return http.post<SignInRequestModel, SignInResponseModel>(Url.signIn, form);
  },
  signUp(form: SignUpRequestModel): Promise<SignUpResponseModel> {
    return http.post<SignUpRequestModel, SignUpResponseModel>(Url.signUp, form);
  },
};
