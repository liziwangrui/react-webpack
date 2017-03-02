// Greeter.js
var configJson = require('./config.json');
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = configJson.greetText;
  return greet;
};
