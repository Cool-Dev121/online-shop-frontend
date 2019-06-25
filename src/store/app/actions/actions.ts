import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  START_API_CALL,
  API_CALL_ENDED,
  API_CALL_FAILED,
  ActionTypes,
  REQUEST_SIGN_IN_SUCCESS,
} from './types';
import { ApiCallError, ThunkExtraArgument, SignInFormModel } from '../../../shared';
import { Dispatch, State } from '../models';

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

export function requestSigInSuccess(token: string): ActionTypes {
  return {
    type: REQUEST_SIGN_IN_SUCCESS,
    payload: {
      token,
    },
  };
}

export const requestSignInActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, State, ThunkExtraArgument, ActionTypes>
> = (form: SignInFormModel) => async (
  dispatch: Dispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.app.signIn({
      email: form.email,
      password: form.password,
    });
    return dispatch(requestSigInSuccess(result.token));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};
