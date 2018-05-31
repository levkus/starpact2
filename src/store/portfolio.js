import { createAction, createReducer } from 'redux-act'
import axios from 'axios'
const initialState = {
  items: [],
  selectedItem: {},
}

export const setItems = createAction('setItems')
export const getItems = () => async (dispatch) => {
  const response = await axios.get('http://starapi.nes/items') 
  console.log(response)
  dispatch(setItems(response.data))
}


export default createReducer({
  [setItems]: (state, payload) => ({
    ...state,
    items: payload,
  })
}, initialState)