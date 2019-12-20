import {
    SAVE_USER_TO_SERVER_REQUEST,
    SAVE_USER_TO_SERVER_SUCCESS,
    SAVE_USER_TO_SERVER_FALIURE
} from './UserActionType'


const userInitialState = {
    users:[],
    loading:'',
    error:'',
}
export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SAVE_USER_TO_SERVER_REQUEST:
            {
                return {
                    ...state,
                    loading: true
                }
            }

        case SAVE_USER_TO_SERVER_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            }
        case SAVE_USER_TO_SERVER_FALIURE:
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