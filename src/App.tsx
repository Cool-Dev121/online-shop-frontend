import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Routing } from './routing';

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <Routing />
  </div>
);

export default App;
