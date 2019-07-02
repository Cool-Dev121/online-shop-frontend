import { Dispatch } from 'redux';
import { AppState } from '../../store';
import {
  ActionTypes,
  ADD_ITEM_TO_CART,
  SET_CART_ITEM_COUNT,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from './types';
import { ProductsTableProductModel, CartItemModel } from '../../../shared';
import { ActionCreator } from '../models';

function addItemToCart(item: ProductsTableProductModel): ActionTypes {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

function removeItemFromCart(id: string): ActionTypes {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  };
}

function setCartItemCount(id: string, count: number): ActionTypes {
  return {
    type: SET_CART_ITEM_COUNT,
    payload: {
      id,
      count,
    },
  };
}

export function clearCart(): ActionTypes {
  return {
    type: CLEAR_CART,
  };
}

export const addItemToCartActionCreator: ActionCreator = (
  item: ProductsTableProductModel,
) => async (dispatch: Dispatch, getState: () => AppState): Promise<ActionTypes | void> => {
  const state = getState();
  const itemFromState: CartItemModel | undefined = state.cart.items[item.id];
  // if item is in cart - increment count
  if (itemFromState) {
    dispatch(setCartItemCount(itemFromState.id, itemFromState.count + 1));
  } else {
    // if not, just add one
    dispatch(addItemToCart(item));
  }
};

export const removeItemFromCartActionCreator: ActionCreator = (itemId: string) => async (
  dispatch: Dispatch,
): Promise<ActionTypes | void> => {
  // TODO: show confirm message
  dispatch(removeItemFromCart(itemId));
};

export const incrementItemCountActionCreator: ActionCreator = (itemId: string) => async (
  dispatch: Dispatch,
  getState: () => AppState,
): Promise<ActionTypes | void> => {
  const state = getState();
  const itemFromState: CartItemModel | undefined = state.cart.items[itemId];
  dispatch(setCartItemCount(itemFromState.id, itemFromState.count + 1));
};

export const decrementItemCountActionCreator: ActionCreator = (itemId: string) => async (
  dispatch: Dispatch,
  getState: () => AppState,
  extraArgument,
): Promise<ActionTypes | void> => {
  const state = getState();
  const itemFromState: CartItemModel | undefined = state.cart.items[itemId];
  if (itemFromState.count - 1 === 0) {
    // item will be removed
    removeItemFromCartActionCreator(itemId)(dispatch, getState, extraArgument);
  } else {
    dispatch(setCartItemCount(itemFromState.id, itemFromState.count - 1));
  }
};

export const clearCartActionCreator: ActionCreator = () => async (
  dispatch: Dispatch,
): Promise<ActionTypes | void> => {
  // TODO: show confirm message
  dispatch(clearCart());
};
