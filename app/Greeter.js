// Greeter.js
// var configJson = require('./config.json');
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = configJson.greetText;
//   return greet;
// };
import React from 'react';
import configJson from './config.json';
import './greeter.css';

class Greeter extends React.Component {
  render() {
    return (
      <div>
      <div className="simple">132131313</div>
      <div className="fancy">qqqqqqq</div>
      </div>
  );
  }
}
export default Greeter;
