import { ApiCallError } from '../../../shared';

export const START_API_CALL = '[APP] START_API_CALL';
export const API_CALL_ENDED = '[APP] API_CALL_ENDED';
export const API_CALL_FAILED = '[APP] API_CALL_FAILED';
export const REQUEST_SIGN_IN_SUCCESS = '[APP] REQUEST_SIGN_IN_SUCCESS';

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

interface RequestSignInSuccessAction {
  type: typeof REQUEST_SIGN_IN_SUCCESS;
  payload: {
    token: string;
  };
}

export type ActionTypes = | StartApiCallAction
  | ApiCallEndedAction
  | ApiCallFailedAction
  | RequestSignInSuccessAction;
