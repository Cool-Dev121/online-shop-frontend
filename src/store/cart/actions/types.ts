import {
  AdminOrdersTableOrderModel,
  ProductsTableProductModel,
  CartItemModel,
} from '../../../shared';

export const ADD_ITEM_TO_CART = '[CART] ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = '[CART] ADD_ITEM_TO_CART';
export const SET_CART_ITEM_COUNT = '[CART] SET_CART_ITEM_COUNT';
export const CLEAR_CART = '[CART] CLEAR_CART';

interface AddItemToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  payload: {
    item: ProductsTableProductModel;
  };
}

interface RemoveItemFromCartAction {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: {
    item: CartItemModel;
  };
}

interface SetCartItemCountAction {
  type: typeof SET_CART_ITEM_COUNT;
  payload: {
    id: string;
    count: number;
  };
}

interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export type ActionTypes = | AddItemToCartAction
  | RemoveItemFromCartAction
  | SetCartItemCountAction
  | ClearCartAction;
