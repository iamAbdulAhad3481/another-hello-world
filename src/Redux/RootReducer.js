import { SAVE_USER_TO_SERVER_REQUEST, SAVE_USER_TO_SERVER_SUCCESS, SAVE_USER_TO_SERVER_FALIURE } from './User/UserActionType'
import { combineReducers } from 'redux'
import { iceCreamReducer } from './IceCream/IceCreamReducer'
import { userReducer } from './User/UserReducer'


export const rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  user: userReducer
})