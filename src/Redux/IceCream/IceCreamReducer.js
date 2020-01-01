import { BUY_ICECREAM } from './ActionTypes'

const initialIceCreamState = {
  numberofIceCreams: 10
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberofIceCreams: state.numberofIceCreams - 1
      }


    default:
      return state
  }

}