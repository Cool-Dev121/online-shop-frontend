import { LOCAL_STORAGE_KEY_TOKEN } from '../../../shared/consts/localStorageKeys';
import {
  START_API_CALL,
  API_CALL_ENDED,
  API_CALL_FAILED,
  ActionTypes,
  LOG_OUT,
  SET_USER_DATA,
} from './types';
import { ApiCallError, SignInFormModel, UserDataModel } from '../../../shared';
import { ThunkDispatch, ActionCreator } from '../models';
import { setValueToLocalStorage, removeValueFromLocalStorage } from '../../../helpers';
import { AppState } from '../../store';
import { decodeToken } from '../../../helpers/token';

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

export function logOut(): ActionTypes {
  return {
    type: LOG_OUT,
  };
}

export function setUser(userData: UserDataModel): ActionTypes {
  return {
    type: SET_USER_DATA,
    payload: {
      userData,
    },
  };
}

const makeApiCall = (dispatch: ThunkDispatch, fn: () => void) => {
  dispatch(startApiCall());
  try {
    fn();
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

export const requestSignInActionCreator: ActionCreator = (form: SignInFormModel) => async (
  dispatch: ThunkDispatch,
  getState: () => AppState,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.auth.signIn({
      login: form.login,
      password: form.password,
    });
    setValueToLocalStorage(LOCAL_STORAGE_KEY_TOKEN, result.token);
    return dispatch(setUser(decodeToken(result.token)));
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
      login: form.login,
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
