import { createStore, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import reducers from '../redux/reducers'

export default function configureStore() {
  const persistConfig = {
    key: 'root',
    storage
  }

  const middlewares = [thunk]
  const store = createStore(
    reducers,
    persistConfig,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return { store }
}