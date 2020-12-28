import { SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_SUCCESS, AUTH_ERROR } from "../actions"

const initialState = {
    authToken: '',
    currentUser: null,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_TOKEN: 
            return {
                ...state,
                authToken: action.token
            }
        case CLEAR_AUTH:
            return {
                ...state,
                authToken: null,
                currentUser: null
            }
        case AUTH_SUCCESS: 
            return {
                ...state,
                currentUser: action.user,
                error: null
            }
        case AUTH_ERROR: 
            return {
                ...state,
                error: action.error
            }
        default: 
            return state
    }
}

export default loginReducer