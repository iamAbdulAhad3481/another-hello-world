import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './UserActionType'
import { fetchUserRequest, fetchUserSuccess } from './UserActions'


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
    default:
      return state
  }

}