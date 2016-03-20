import React from 'react';
import { render } from 'react-dom';
import  injectTapEventPlugin from 'react-tap-event-plugin';
import App from './pages/2048.jsx';
//const App = require('./pages/layout.jsx');


injectTapEventPlugin();

render(
  <App />,
  document.getElementById('app')
);