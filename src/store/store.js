import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import uiReducer from './ui'

const reducers = combineReducers({
  ui: uiReducer,
})

export default createStore(reducers, applyMiddleware(thunk))
