import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Routing } from './routing';
import { getTheme, ThemeType } from './components';
import { rootReducer, logMiddleware, setUser } from './store';
import { apiHub } from './api';
import {
  ThunkExtraArgument,
  FullscreenLoadingSignContainer,
  LOCAL_STORAGE_KEY_TOKEN,
} from './shared';

import { getValueFromLocalStorage } from './helpers';
import { decodeToken } from './helpers/token';

const theme = ThemeType.Default;

const thunkExtraArgument: ThunkExtraArgument = {
  api: apiHub,
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(thunkExtraArgument), logMiddleware),
);

const initUser = () => {
  const token = getValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
  token && store.dispatch(setUser(decodeToken(token)));
};
initUser();

const App = (): JSX.Element => (
  <ThemeProvider theme={getTheme(theme)}>
    <Provider store={store}>
      <Routing />
      <FullscreenLoadingSignContainer />
    </Provider>
  </ThemeProvider>
);

export default App;
