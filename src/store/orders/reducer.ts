import { ActionTypes, REQUEST_TABLE_ORDERS_SUCCESS, REQUEST_TABLE_ORDERS_ERROR } from './actions';

import { State } from './models';

const initialState: State = {
  items: [],
  totalPagesCount: 0,
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case REQUEST_TABLE_ORDERS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        totalPagesCount: action.payload.totalPagesCount,
      };
    case REQUEST_TABLE_ORDERS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
