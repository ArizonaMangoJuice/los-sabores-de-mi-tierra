import { CHANGE_TITLE, CHANGE_BODY, PAGE_ERROR, PAGE_SUCCESS, CLEAR_PAGE} from "../actions"

let initialState = {
    title: '',
    body: '',
    linkName: '',
    errror: undefined,
    success: undefined
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
        case PAGE_SUCCESS: {
            return {
                ...state,
                success: 'Blog has been saved successfully!'
            }
        }
        case CLEAR_PAGE : {
            return {
                ...state,
                success: undefined,
                error: undefined,
                title: '',
                body: '',
                linkName: ''
            }
        }
        default: 
            return state
    }
}

export default page