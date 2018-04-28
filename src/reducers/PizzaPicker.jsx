//src/reducers/PizzaPicker.jsx
import {ADD_BASE} from '../actions/PizzaPicker'
import {ADD_SAUCE} from '../actions/PizzaPicker'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_BASE:
      return state.concat(action.payload)
    case ADD_SAUCE:
      return state.concat(action.payload)
    default:
      return state
  }
}