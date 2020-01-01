import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './UserActionType'
import axios from 'axios'
import store from '../Store'
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}
export const fetchUserError = error => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
}


export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(fetchUserSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchUserError(error.message))
      })
  }
}