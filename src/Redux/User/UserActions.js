import {
    SAVE_USER_TO_SERVER_REQUEST,
    SAVE_USER_TO_SERVER_SUCCESS,
    SAVE_USER_TO_SERVER_FALIURE
} from './UserActionType'
import axios from 'axios'

export const saveUserToServerRequest=()=>{
    return{
        type:SAVE_USER_TO_SERVER_REQUEST
    }
}

export const saveUserToServerSuccess=(user)=>{
    return{
        type:SAVE_USER_TO_SERVER_SUCCESS,
        payload:user
    }
}

export const saveUserToServerFailure=(error)=>{
    return{
        type:SAVE_USER_TO_SERVER_FALIURE,
        payload:error
    }
}
export const fetchUser=(user)=>{
    return (dispatch)=>{
        dispatch(saveUserToServerRequest)
        axios.post('https://jsonplaceholder.typicode.com/users',user)
        .then(response=>{
            dispatch(saveUserToServerSuccess(response.data))
        })
        .catch(error=>{
            const errorMsg=error.message;
            dispatch(saveUserToServerFailure(errorMsg))
        })
    }
}