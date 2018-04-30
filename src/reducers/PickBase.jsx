//src/reducers/PickBase.jsx
import {ADD_BASE} from '../actions/PizzaPicker'

export default (state = 0, action) => {
  switch(action.type) {
    case ADD_BASE:
      return state = action.payload
      
    default:
      return state
  }
}
