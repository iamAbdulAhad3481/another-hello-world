import axios from 'axios'
import {
    Fetch_User_Request,
    Fetch_User_Success,
    Fetch_User_Error
} from './ActionType'




export const fetchUserRequest=()=>{
    return{
        type:Fetch_User_Request
    }
}

export const fetchUserSuccess=(users)=>{
    return{
        type:Fetch_User_Success,
        payload:users
    }
}

export const fetchUserError=(error)=>{
    return{
        type:Fetch_User_Error,
        payload:error
    }
}

export const fetchUser=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data;
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            const errorMsg=error.message;
            dispatch(fetchUserError(errorMsg))
        })
    }
}