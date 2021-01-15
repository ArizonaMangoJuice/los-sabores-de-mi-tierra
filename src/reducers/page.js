import { CHANGE_TITLE, 
        CHANGE_BODY, 
        PAGE_ERROR, 
        PAGE_SUCCESS, 
        CLEAR_PAGE, 
        NEW_PARAGRAPH,
        CHANGE_PARAGRAPH, 
        DELETE_PARAGRAPH, 
        ADD_MAIN_IMAGE, 
        ADD_MAIN_IMAGE_PREVIEW, 
        ADD_IMAGE, ADD_LINK, 
        ADD_LINK_NAME, 
        ADD_LINK_STACK, 
        CLEAR_LINKNAME, 
        CLEAR_LINK, 
        ADD_LINK_NAME_TO_BODY, 
        ADD_LIST ,
        NEW_ITEM,
        DELETE_ITEM,
        RESET_ID,
        EDIT_PARAGRAPH,
    } from "../actions"

let initialState = {
    title: '',
    body: '',
    linkName: '',
    errror: undefined,
    success: undefined,
    stack: [],
    imagePreviews: [],
    imagePreview: '',
    linkStack: [],
    hyperLink: '',
    list: [], 
    history: []
}

const page = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TITLE:{
            return {
                ...state,
                title: action.title
            }}
        case CHANGE_BODY:{
            return {
                ...state,
                body: action.body
            }}
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
                linkName: '',
                stack: []
            }
        }
        case NEW_ITEM: {
            return {
                ...state,
                history: [
                    ...state.history,
                    {
                        id: state.history.length,
                        text: ''
                    }

                ]
            }
        }
        case DELETE_ITEM: {
            let newHistory = state.history
                .filter(e => e.id != action.id);
                
            // for(let i = 0; i < newHistory.length; i++){
            //     array.push({
            //         ...newHistory[i],
            //         id: i
            //     })
            // }
            console.log(newHistory)
            return {
                ...state,
                history: newHistory
            }
        }

        case RESET_ID: {
            let resetHistory = state.history.map((e, i) => ({...e, id: i}));
            console.log('this is the history !!!!!!!!!!!!!!!!!!!!!!!!!!!!',resetHistory);
            return {
                ...state,
                history: resetHistory
            }
        }
        case EDIT_PARAGRAPH: {
            console.log('this is before the change', state.history)
            let test = state.history.map(e => (
                e.id === action.data.id
                ? {id: e.id, text: action.data.text}
                : e
                ))
            console.log('this is running', test)
            return {
                ...state,
                history: test
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
            let array = []
            let count = 0

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
        case ADD_MAIN_IMAGE: {
            let image = action.image
            
            let mainImageArray = [image, ...state.stack]

            let imageResult = mainImageArray.map((e, i) => {
                e.stackId = i;
                return e
            })

            return {
                ...state,
                stack: imageResult
            }}

        case ADD_MAIN_IMAGE_PREVIEW: {
            return {
                ...state,
                imagePreview: action.preview
            }}

        case ADD_IMAGE:{ 
            let addedImage = action.data.image
            addedImage.link = action.data.link
            state.stack = [...state.stack, addedImage]
            let imageArr = []

            for(let i = 0; i < state.stack.length; i++){
                let newId = state.stack[i]
                newId.stackId = i
                imageArr.push(newId) 
            }
            return{
                ...state,
                stack: imageArr
            }}

        case ADD_LINK_NAME: {
            return {
                ...state,
                linkName: action.name
            }
        }
        case ADD_LINK: {
            return {
                ...state,
                hyperLink: action.name
            }
        }
        case ADD_LINK_STACK: {
            return {
                ...state,
                linkStack: [
                    ...state.linkStack,
                        action.data
                ]
            }
        }
        case CLEAR_LINKNAME: {
            return {
                ...state,
                hyperLink: ''
            }
        }
        case CLEAR_LINK: {
            return {
                ...state,
                linkName: ''
            }
        }
        case ADD_LINK_NAME_TO_BODY: {
            return {
                ...state,
                body: state.body += ' [' + action.data.name  +', ' + action.data.paragraphNumber + '] '
            }
        }
        case ADD_LIST: {
            return {
                ...state,
                stack: [...state.stack, action.list],
                list: [...state.list, action.list]
            }
        }
        default: 
            return state
    }
}

export default page