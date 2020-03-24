import { CHANGE_TITLE, CHANGE_BODY} from "../actions"

let initialState = {
    title: '',
    body: '',
    linkName: ''
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
        default: 
            return state
    }
}

export default page