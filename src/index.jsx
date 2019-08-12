import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { location } from './data/forecast.json';

render(<App location={location} />, document.getElementById('root'));
