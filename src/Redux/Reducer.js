import {
    Fetch_User_Request,
    Fetch_User_Success,
    Fetch_User_Error
} from './ActionType'

const initialState = {
    users: [],
    error: '',
    loading: true,
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_User_Request:
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case Fetch_User_Success:
            {
                return {
                    ...state,
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            }
        case Fetch_User_Error:
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