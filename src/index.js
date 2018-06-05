import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';

ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('root'));
registerServiceWorker();
