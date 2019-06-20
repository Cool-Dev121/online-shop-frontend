import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Routing } from './routing';
import { getTheme, ThemeType } from './components';
import { rootReducer } from './store';

const theme = ThemeType.Default;

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = (): JSX.Element => (
  <ThemeProvider theme={getTheme(theme)}>
    <Provider store={store}>
      <Routing />
    </Provider>
  </ThemeProvider>
);

export default App;
