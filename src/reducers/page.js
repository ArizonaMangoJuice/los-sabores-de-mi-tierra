import { CHANGE_TITLE, CHANGE_BODY, PAGE_ERROR} from "../actions"

let initialState = {
    title: '',
    body: '',
    linkName: '',
    errror: undefined
}

const page = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            }
        case CHANGE_BODY:
            return {
                ...state,
                body: action.body
            }
        case PAGE_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: 
            return state
    }
}

export default page