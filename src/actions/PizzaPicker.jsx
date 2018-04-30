//src/actions/PickBase.jsx
export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE_TOPPING = "REMOVE_TOPPING"
export const ADD_TURBO_DELIVERY = "ADD_TURBO_DELIVERY"
export const REMOVE_TURBO_DELIVERY = "REMOVE_TURBO_DELIVERY"

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

export const addTurboDelivery = (turboDelivery) => {
  return {
    type: ADD_TURBO_DELIVERY,
    payload: turboDelivery
  }
}

export const removeTurboDelivery = (turboDelivery) => {
  return {
    type: REMOVE_TURBO_DELIVERY,
    payload: turboDelivery
  }
}



