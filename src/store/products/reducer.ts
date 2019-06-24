import {
  ActionTypes,
  REQUEST_TABLE_PRODUCTS_SUCCESS,
  REQUEST_PRODUCT_BY_ID_SUCCESS,
} from './actions';

import { State } from './models';

const initialState: State = {
  items: [],
  totalItemsCount: 0,
  selectedProduct: undefined,
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case REQUEST_TABLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        totalItemsCount: action.payload.totalItemsCount,
      };
    case REQUEST_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        selectedProduct: action.payload.item,
      };
    default:
      return state;
  }
}
