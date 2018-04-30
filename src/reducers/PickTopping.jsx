//src/reducers/PickTopping.jsx
import {ADD_TOPPING, REMOVE_TOPPING } from '../actions/PizzaPicker'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TOPPING:
        if (state.length < 3) {
          return state.concat(action.payload)
        } else {
          return state
        }

        case REMOVE_TOPPING:
        return state.filter(topping => topping !== action.payload)
      
        default:
        return state
    }
}
