import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, ADD_USER, DELETE_USER,EDIT_USER } from './UserActionType'

const userInitialState = {
  users: [],
  loading: '',
  error: '',
}

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      {
        return {
          ...state,
          loading: true
        }
      }

    case FETCH_USER_SUCCESS:
      {
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: ''
        }
      }
    case FETCH_USER_ERROR:
      {
        return {
          ...state,
          loading: false,
          error: action.payload,
          users: []
        }
      }
    case ADD_USER:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
        error: ''
      }
    case DELETE_USER:
      console.log(action)
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user.id != action.payload.id),
        error: ''
      }
    case EDIT_USER:
      console.log(action)
      const index=action.index
      const tempUsers = state.users
      tempUsers[index] =action.payload
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