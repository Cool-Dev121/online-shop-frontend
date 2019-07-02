import { ApiCallError, UserDataModel } from '../../../shared';

export const START_API_CALL = '[APP] START_API_CALL';
export const API_CALL_ENDED = '[APP] API_CALL_ENDED';
export const API_CALL_FAILED = '[APP] API_CALL_FAILED';
export const REQUEST_SIGN_UP_SUCCESS = '[APP] REQUEST_SIGN_UP_SUCCESS';
export const LOG_OUT = '[APP] LOG_OUT';
export const SET_USER_DATA = '[APP] SET_USER_DATA';

interface StartApiCallAction {
  type: typeof START_API_CALL;
  payload: {
    isLoadingShown: boolean;
  };
}

interface ApiCallEndedAction {
  type: typeof API_CALL_ENDED;
  payload: {
    isLoadingShown: boolean;
  };
}

interface ApiCallFailedAction {
  type: typeof API_CALL_FAILED;
  payload: {
    error: ApiCallError;
  };
}

interface RequestSignUpSuccessAction {
  type: typeof REQUEST_SIGN_UP_SUCCESS;
  payload: {
    result: boolean;
  };
}

interface LogOutAction {
  type: typeof LOG_OUT;
}

interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: {
    userData: UserDataModel;
  };
}

export type ActionTypes = | StartApiCallAction
  | ApiCallEndedAction
  | ApiCallFailedAction
  | RequestSignUpSuccessAction
  | LogOutAction
  | SetUserDataAction;
