import { SignInRequestModel, SignInResponseModel } from '../models';
import { AppApiInterface } from './AppApiInterface';

export const appApiMock: AppApiInterface = {
  signIn(form: SignInRequestModel): Promise<SignInResponseModel> {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          token: 'test_token',
        });
      }, 300);
    });
  },
};
