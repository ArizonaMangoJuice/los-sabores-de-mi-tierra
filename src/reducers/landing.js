import { ADD_PAGES } from "../actions"

let initialState = {
    pages: []
}

const landingPage = (state = initialState, action) => {
    switch(action.type){
        case ADD_PAGES:
            return {
                ...state,
                pages: action.pages
            }
        default: 
            return state
    }
}

export default landingPage