//src/actions/PickBase.jsx
export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE_TOPPING = "REMOVE_TOPPING"
export const CALCULATE_TOTAL_PRICE = "CALCULATE_TOTAL_PRICE"

export const addBase = (base) => {
    return {
      type: ADD_BASE,
      payload: base
    }
}

export const addSauce = (sauce) => {
    return {
      type: ADD_SAUCE, 
      payload: sauce
    }
}

export const addTopping = (topping) => {
  return {
    type: ADD_TOPPING,
    payload: topping
  }
}

export const removeTopping = (topping) => {
  return {
    type: REMOVE_TOPPING,
    payload: topping
  }
}
// need delivery action 

// export const calculateTotalPrice = (dispatch, getState) => { 
//   const state = getState();
//   let totalPrice = 0;

//   totalPrice = state.PickBase

//   dispatch( {
//     type: CALCULATE_TOTAL_PRICE,
//     payload: totalPrice
//   })
// }  

// export const calculateTotalPrice = () => (total, getState) => {
//   const state = getState();
//   let totalPrice = 0;

