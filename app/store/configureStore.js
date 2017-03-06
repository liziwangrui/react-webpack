import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import rootReducer from 'reducers/rootReducer'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    // composeEnhancers(
    //   applyMiddleware(thunk)
    // )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

module.exports = configureStore
