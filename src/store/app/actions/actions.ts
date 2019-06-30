import { LOCAL_STORAGE_KEY_TOKEN } from '../../../shared/consts/localStorageKeys';
import {
  START_API_CALL,
  API_CALL_ENDED,
  API_CALL_FAILED,
  ActionTypes,
  REQUEST_SIGN_IN_SUCCESS,
  LOG_OUT,
} from './types';
import { ApiCallError, SignInFormModel } from '../../../shared';
import { ThunkDispatch, ActionCreator } from '../models';
import { setValueToLocalStorage, removeValueFromLocalStorage } from '../../../helpers';

export function startApiCall(): ActionTypes {
  return {
    type: START_API_CALL,
    payload: {
      isLoadingShown: true,
    },
  };
}

export function apiCallEnded(): ActionTypes {
  return {
    type: API_CALL_ENDED,
    payload: {
      isLoadingShown: false,
    },
  };
}

export function apiCallFailed(error: ApiCallError): ActionTypes {
  return {
    type: API_CALL_FAILED,
    payload: {
      error,
    },
  };
}

export function requestSignInSuccess(token: string): ActionTypes {
  return {
    type: REQUEST_SIGN_IN_SUCCESS,
    payload: {
      token,
    },
  };
}

export function logOut(): ActionTypes {
  return {
    type: LOG_OUT,
  };
}

export const requestSignInActionCreator: ActionCreator = (form: SignInFormModel) => async (
  dispatch: ThunkDispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.auth.signIn({
      login: form.email,
      password: form.password,
    });
    setValueToLocalStorage(LOCAL_STORAGE_KEY_TOKEN, result.token);
    return dispatch(requestSignInSuccess(result.token));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

export const requestSignUpActionCreator: ActionCreator = (form: SignInFormModel) => async (
  dispatch: ThunkDispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    await api.auth.signUp({
      login: form.email,
      password: form.password,
    });
    // TODO: should be redirected to sign in page
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

export const logOutActionCreator: ActionCreator = () => async (
  dispatch: ThunkDispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(logOut());
  removeValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
};
