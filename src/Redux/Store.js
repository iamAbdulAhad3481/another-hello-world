import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './Reducer'
import {userReducer} from './User/UserReducer'



const store=createStore(userReducer,applyMiddleware(thunk))

export default store