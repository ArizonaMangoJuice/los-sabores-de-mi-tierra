import { CHANGE_TITLE, CHANGE_BODY, PAGE_ERROR, PAGE_SUCCESS, CLEAR_PAGE, NEW_PARAGRAPH, CHANGE_PARAGRAPH, DELETE_PARAGRAPH} from "../actions"
import { getNodeText } from "@testing-library/react"

let initialState = {
    title: '',
    body: '',
    linkName: '',
    errror: undefined,
    success: undefined,
    stack: []
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
        case NEW_PARAGRAPH: {
            return {
                ...state,
                body: '',
                stack: [
                    ...state.stack, 
                    {
                        paragraph: action.pData.paragraph,
                        stackId: action.pData.stackId
                    }
                ]
            }
        }
        case CHANGE_PARAGRAPH: {
            let {stackId, paragraph} = action.pData
            let array = [];

            // tried the spread operator but it didnt work read on it so you can reduce the code 
            for(let i = 0; i < state.stack.length; i++){
                if(state.stack[i].stackId === stackId){
                   array.push({
                       paragraph,
                       stackId
                   }) 
                } else {
                    array.push(state.stack[i])
                }
            }
            return {
                ...state,
                stack: array
            }
        }
        case DELETE_PARAGRAPH: {
            let {stackId} = action
            let array = [];
            let count = 0;

            // tried the spread operator but it didnt work read on it so you can reduce the code 
            for(let i = 0; i < state.stack.length; i++){
                if(state.stack[i].stackId === stackId){
                   continue
                } else {
                    let updatedId = {
                        paragraph: state.stack[i].paragraph,
                        stackId: count
                    }
                    array.push(updatedId)
                    count++;
                }
            }
            
            return {
                ...state,
                stack: array
            }
        }
        default: 
            return state
    }
}

export default page