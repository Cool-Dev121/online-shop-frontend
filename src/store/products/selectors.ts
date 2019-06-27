import { createSelector } from 'reselect';
import { AppState } from '../store';

const productItemsSelector = (state: AppState) => state.products.items;

export const getIsNoProductItems = createSelector(
  [productItemsSelector],
  items => items.length < 1,
);
