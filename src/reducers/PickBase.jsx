//src/reducers/PickBase.jsx
import {ADD_BASE} from '../actions/PizzaPicker'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_BASE:
    return state = action.payload
    // case CALCULATE_TOTAL_PRICE:
    // return state
      
    default:
      return state
  }
}
