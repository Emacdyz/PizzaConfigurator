//src/reducers/TurboDelivery.jsx
import {ADD_TURBO_DELIVERY, REMOVE_TURBO_DELIVERY} from '../actions/PizzaPicker'

export default (state = 0, action) => {
    switch(action.type) {
        case ADD_TURBO_DELIVERY: 
        if (state === 0) {
            return state = 0.1
        } else {
            return state
        }

        case REMOVE_TURBO_DELIVERY:
            return state  = 0
    
        default: 
            return state
    }
}