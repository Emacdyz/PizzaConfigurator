//src/reducers/PizzaPicker.jsx
import {ADD_BASE, ADD_SAUCE, ADD_TOPPING } from '../actions/PizzaPicker'

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_BASE:
      return state.concat(action.payload)
    case ADD_SAUCE:
      return state.concat(action.payload)
    case ADD_TOPPING:
      if (state.length < 3 ) {
        return state.concat(action.payload)
      } else {
        return state
      }
      
    default:
      return state
  }
}