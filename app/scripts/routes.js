import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect,Redirect } from 'react-router';
import App from 'components/App';
import Demo from 'containers/Demo'
module.exports = (function(history){
  return (
    <Router history={history}>
      <Route path="/index" Component={App}>
        <IndexRoute component={App} />
      </Route>
      <Route path="/demo" Component={Demo} />
      <Redirect from="*" to="error" component={Error} />
    </Router>
  )
})
