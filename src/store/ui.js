import { createAction, createReducer } from 'redux-act'
const initialState = {
  side: 'front',
}

export const setSide = createAction('setSide')

export default createReducer({
  [setSide]: (state, payload) => ({
    ...state,
    side: payload,
  })
}, initialState)