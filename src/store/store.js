import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import portfolioReducer from './portfolio'

const reducers = combineReducers({
  portfolio: portfolioReducer,
})

export default createStore(reducers, applyMiddleware(thunk))
