import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './UserActionType'
import { ADD_USER, DELETE_USER,EDIT_USER } from './UserActionType'
import axios from 'axios'
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

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  }
}
export const deleteUser = user => {
  return {
    type: DELETE_USER,
    payload: user
  }
}
export const editUser=(user,index)=>{
  return{
    type:EDIT_USER,
    payload:user,
    index
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


export const createUser = (user) => {
  return (dispatch) => {
    axios.post(`https://jsonplaceholder.typicode.com/users`, user)
      .then(response => {
        dispatch(addUser(response.data))
        console.log('response Data', user)
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const Delete = (user) => {
  return (dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(response => {
        console.log('delete Data', user)
        dispatch(deleteUser(user))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const Edit = (user,index) => {
  return (dispatch) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`,user)
      .then(response => {
        console.log('Updated User', user)
        dispatch(editUser(user,index))
      })
      .catch(error => {
        throw (error);
      });
  };
};