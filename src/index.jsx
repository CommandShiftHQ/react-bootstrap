import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from '../components/app';


render(<App name="Thomas" age="30" />, document.getElementById('root'));
