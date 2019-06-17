import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routing } from './routing';
import { getTheme, ThemeType } from './components';

const theme = ThemeType.Default;

const App: React.FC = (): JSX.Element => (
  <ThemeProvider theme={getTheme(theme)}>
    <Routing />
  </ThemeProvider>
);

export default App;
