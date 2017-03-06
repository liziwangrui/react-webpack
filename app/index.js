//main.js
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

// import React from 'react';
// import {render} from 'react-dom';
// import Greeter from './Greeter';
// import './main.css';
//
// render(<Greeter />, document.getElementById('root'));


import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore } from 'redux'
import { Router } from 'react-router'
import configureStore from './store/configureStore'
import Root from 'containers/AppRoute'
import App from 'components/App'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
