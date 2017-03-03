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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
