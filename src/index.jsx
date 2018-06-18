import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';

render(
  (
    <h1 style={{ color: 'green' }}>Hello World!</h1>
  ), document.getElementById('root'),
);
