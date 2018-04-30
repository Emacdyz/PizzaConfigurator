//src/reducers/PickSauce.jsx
import {ADD_SAUCE} from '../actions/PizzaPicker'

export default (state = 0, action) => {
    switch(action.type) {
        case ADD_SAUCE:
            return state = action.payload
        
        default:
            return state
    }
}

// use pop