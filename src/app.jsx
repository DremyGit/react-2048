import React from 'react';
import { render } from 'react-dom';
import  injectTapEventPlugin from 'react-tap-event-plugin';
const App = require('./pages/layout.jsx');
const Page2048 = require('./pages/2048.jsx');


injectTapEventPlugin();

render(
  <App>
      <Page2048/>
  </App>,
  document.getElementById('app')
);