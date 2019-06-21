import {
  START_API_CALL, API_CALL_ENDED, API_CALL_FAILED, ActionTypes,
} from './actions';

import { State } from './models';

const initialState: State = {
  isLoadingShown: false,
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case START_API_CALL:
      return {
        ...state,
        isLoadingShown: action.payload.isLoadingShown,
      };
    case API_CALL_ENDED:
      return {
        ...state,
        isLoadingShown: action.payload.isLoadingShown,
      };
    case API_CALL_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}
