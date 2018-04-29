import {ADD_BASE, ADD_SAUCE, ADD_TOPPING } from '../actions/PizzaPicker'

const initialState = {
  base: null,
  sauce: null,
  topping: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_BASE:
      return {...state, base: action.payload}
    case ADD_SAUCE:
      return {...state, sauce: action.payload}
    case ADD_TOPPING:
        if (state.length < 3 ) {
        return state = action.payload
      } else {
        return state.concat(0.5)
      }
      
    default:
      return state
  }
}