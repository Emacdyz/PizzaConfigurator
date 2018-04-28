//src/reducers/PickBase.jsx
import {ADD_BASE} from '../actions/PickBase'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_BASE:
      return state.concat(action.payload)
    default:
      return state
  }
}