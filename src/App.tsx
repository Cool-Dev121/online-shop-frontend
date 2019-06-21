import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Routing } from './routing';
import { getTheme, ThemeType } from './components';
import { rootReducer, logMiddleware } from './store';
import { apiHub } from './api';
import { ThunkExtraArgument } from './shared';

const theme = ThemeType.Default;

const thunkExtraArgument: ThunkExtraArgument = {
  api: apiHub,
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(thunkExtraArgument), logMiddleware),
);

const App: React.FC = (): JSX.Element => (
  <ThemeProvider theme={getTheme(theme)}>
    <Provider store={store}>
      <Routing />
    </Provider>
  </ThemeProvider>
);

export default App;
