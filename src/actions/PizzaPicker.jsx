//src/actions/PickBase.jsx
export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"

export const addBase = (base) => {
    return {
      type: ADD_BASE,
      payload: base
    }
}

export const addSauce = (sauce) => {
    return {
      type: ADD_BASE, 
      payload: sauce
    }
}

export const addTopping = (toppings) => {
  return {
    type: ADD_TOPPING,
    payload: toppings
  }
}