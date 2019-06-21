import { ActionTypes, REQUEST_TABLE_PRODUCTS_SUCCESS } from './actions';

import { State } from './models';

const initialState: State = {
  items: [],
  totalItemsCount: 0,
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case REQUEST_TABLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        totalItemsCount: action.payload.totalItemsCount,
      };
    default:
      return state;
  }
}
