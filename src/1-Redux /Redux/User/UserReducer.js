import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './ActionTypes'
import { DELETE_USER, ADD_USER, EDIT_USER } from './ActionTypes'
const initialState = {
  users: {},
  error: '',
  loading: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error:''
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        users:{},
        error: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
        error:'',loading:false
      }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        error:''
      }
    case EDIT_USER:
     
      const {index}=action
      console.log(index)
      let tempUsers = state.users
      tempUsers[index] = action.payload
      console.log(tempUsers)
      return {
        ...state,
        loading: false,
        error:'',
        users:tempUsers
      }
    default:
      return state
  }
}