import { createSelector } from 'reselect';
import { AppState } from '../store';

const adminOrderItemsSelector = (state: AppState) => state.orders.admin.items;
const customerOrderItemsSelector = (state: AppState) => state.orders.customer.items;

export const getIsNoAdminOrderItems = createSelector(
  [adminOrderItemsSelector],
  items => items.length < 1,
);

export const getIsNoCustomerOrderItems = createSelector(
  [customerOrderItemsSelector],
  items => items.length < 1,
);
