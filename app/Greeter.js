// Greeter.js
// var configJson = require('./config.json');
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = configJson.greetText;
//   return greet;
// };
import React from 'react';
import configJson from './config.json';
class Greeter extends React.Component {
  render() {
    return <div>{configJson.greetText}</div>
  }
}
export default Greeter;
