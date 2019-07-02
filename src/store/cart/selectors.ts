import { createSelector } from 'reselect';
import { AppState } from '../store';
import { CartItemModel } from '../../shared';
import { getKeys, asArray } from '../../components';
import { getCartSum } from '../../helpers';

export const cartItemsSelector = (state: AppState): { [id: string]: CartItemModel } => state.cart.items;

export const getIsNoCartItems = createSelector(
  [cartItemsSelector],
  items => getKeys(items).length < 1,
);

export const getCartItemsArray = createSelector(
  [cartItemsSelector],
  items => asArray(items),
);

export const getCartItemsSum = createSelector(
  [getCartItemsArray],
  items => getCartSum(items),
);
