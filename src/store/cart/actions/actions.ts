import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { AppState } from '../../store';
import {
  ActionTypes,
  ADD_ITEM_TO_CART,
  SET_CART_ITEM_COUNT,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from './types';
import { ThunkExtraArgument, ProductsTableProductModel, CartItemModel } from '../../../shared';

function addItemToCart(item: ProductsTableProductModel): ActionTypes {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

function removeItemFromCart(item: ProductsTableProductModel): ActionTypes {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      item,
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

function clearCart(): ActionTypes {
  return {
    type: CLEAR_CART,
  };
}

export const addItemToCartActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, AppState, ThunkExtraArgument, ActionTypes>
> = (item: ProductsTableProductModel) => async (
  dispatch: Dispatch,
  getState: () => AppState,
): Promise<ActionTypes | void> => {
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

export const removeItemFromCartActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, AppState, ThunkExtraArgument, ActionTypes>
> = (item: ProductsTableProductModel) => async (
  dispatch: Dispatch,
): Promise<ActionTypes | void> => {
  // TODO: show confirm message
  dispatch(removeItemFromCart(item));
};

export const incrementItemCountActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, AppState, ThunkExtraArgument, ActionTypes>
> = (item: ProductsTableProductModel) => async (
  dispatch: Dispatch,
  getState: () => AppState,
): Promise<ActionTypes | void> => {
  const state = getState();
  const itemFromState: CartItemModel | undefined = state.cart.items[item.id];
  dispatch(setCartItemCount(itemFromState.id, itemFromState.count + 1));
};

export const decrementItemCountActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, AppState, ThunkExtraArgument, ActionTypes>
> = (item: ProductsTableProductModel) => async (
  dispatch: Dispatch,
  getState: () => AppState,
  extraArgument,
): Promise<ActionTypes | void> => {
  const state = getState();
  const itemFromState: CartItemModel | undefined = state.cart.items[item.id];
  if (itemFromState.count - 1 === 0) {
    // item will be removed
    removeItemFromCartActionCreator(item)(dispatch, getState, extraArgument);
  } else {
    dispatch(setCartItemCount(itemFromState.id, itemFromState.count - 1));
  }
};

export const clearCartActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, AppState, ThunkExtraArgument, ActionTypes>
> = () => async (dispatch: Dispatch): Promise<ActionTypes | void> => {
  // TODO: show confirm message
  dispatch(clearCart());
};
