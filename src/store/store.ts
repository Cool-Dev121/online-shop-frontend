import { combineReducers } from 'redux';
import { reducer as ordersReducer } from './orders';
import { reducer as appReducer } from './app';
import { reducer as productsReducer } from './products';

export const rootReducer = combineReducers({
  orders: ordersReducer,
  products: productsReducer,
  app: appReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
