import { combineReducers } from 'redux';
import { reducer as ordersReducer } from './orders';
import { reducer as appReducer } from './app';

export const rootReducer = combineReducers({
  orders: ordersReducer,
  app: appReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
