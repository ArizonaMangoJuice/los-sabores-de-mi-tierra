import { CHANGE_TITLE, 
        CHANGE_BODY, 
        PAGE_ERROR, 
        PAGE_SUCCESS, 
        CLEAR_PAGE, 
        NEW_PARAGRAPH,
        CHANGE_PARAGRAPH, 
        DELETE_PARAGRAPH, 
        ADD_MAIN_IMAGE, 
        ADD_MAIN_IMAGE_PREVIEW, ADD_IMAGE, ADD_IMAGE_PREVIEW, addImage, ADD_LINK, ADD_LINK_NAME, ADD_LINK_STACK, CLEAR_LINKNAME, CLEAR_LINK, ADD_LINK_NAME_TO_BODY, ADD_LIST } from "../actions"

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
    linkName: '',
    hyperLink: '',
    list: []
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