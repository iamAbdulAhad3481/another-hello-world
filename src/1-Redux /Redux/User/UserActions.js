import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './ActionTypes'
import { DELETE_USER,ADD_USER,EDIT_USER} from './ActionTypes'

import axios from 'axios'

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUserRequest())
    // console.log('Making a request')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // console.log('Request Success')
        dispatch(fetchUserSuccess(response.data))
      })
      .catch(error => dispatch(fetchUserError(error.message)))
  }
}

const deleteUser=(user)=>{
  return{
    type:DELETE_USER,
    payload:user
  }
}

export const Delete= user =>{
  return dispatch =>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    .then(response=>dispatch(deleteUser(user)))
    .catch(error=>dispatch(fetchUserError(error.message)))
  }
}

const addUser=(user)=>{
  return{
    type:ADD_USER,
    payload:user
  }
}
export const Add=(user)=>{
  return dispatch=>{
    axios.post('https://jsonplaceholder.typicode.com/users',user)
    .then(response=>dispatch(addUser(response.data)))
    .catch(error=>dispatch(fetchUserError(error.message)))
  }
}

const editUser=(user,index)=>{
  return{
    type:EDIT_USER,
    payload:user,
    index
  
  }
}
export const Edit=(user,index)=>{
  return dispatch=>{
    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`,user)
    .then(response=>{
      dispatch(editUser(response.data,index))})
    .catch(error=>dispatch(fetchUserError(error.message)))
  }
}