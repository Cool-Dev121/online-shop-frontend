import { combineReducers } from 'redux';
import { reducer as ordersReducer } from './orders';
import { reducer as appReducer } from './app';
import { reducer as productsReducer } from './products';
import { reducer as cartReducer } from './cart';

export const rootReducer = combineReducers({
  app: appReducer,
  orders: ordersReducer,
  products: productsReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
