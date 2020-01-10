import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {userReducer} from './User/UserReducer'

const store=createStore(userReducer,applyMiddleware(thunk))

export default store