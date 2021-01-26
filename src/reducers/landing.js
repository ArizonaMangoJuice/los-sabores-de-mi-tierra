import { ADD_PAGES, FETCH_LOADING, FETCH_COMPLETED } from "../actions"

let initialState = {
    pages: [],
    loading: false,
}

const landingPage = (state = initialState, action) => {
    switch(action.type){
        case ADD_PAGES:
            return {
                ...state,
                pages: action.pages
            }
        case FETCH_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_COMPLETED: {
            return {
                ...state,
                loading: false
            }
        }
        default: 
            return state
    }
}

export default landingPage