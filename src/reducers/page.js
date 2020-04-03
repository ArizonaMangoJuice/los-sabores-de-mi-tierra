import { CHANGE_TITLE, CHANGE_BODY, PAGE_ERROR, PAGE_SUCCESS, CLEAR_PAGE, NEW_PARAGRAPH, CHANGE_PARAGRAPH, DELETE_PARAGRAPH, ADD_MAIN_IMAGE, ADD_MAIN_IMAGE_PREVIEW, ADD_IMAGE, ADD_IMAGE_PREVIEW, addImage} from "../actions"

let initialState = {
    title: '',
    body: '',
    linkName: '',
    errror: undefined,
    success: undefined,
    stack: [],
    imagePreviews: [],
    imagePreview: ''
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
        case ADD_MAIN_IMAGE: 
            let {image} = action 
            let array = []

            for( let i = 0; i < 1 ; i++){
                if(i === 0) {
                    array.push(image)
                    array[i].mainImage = true
                    array[i].stackId = i
                    console.log('inside the first if === 0',array)
                }
            }

            for(let i = 0; i < state.stack.length; i++){
                if(state.stack[i] && state.stack[i].mainImage){
                } else {
                    array.push(state.stack[i])
                    array[i].stackId = i
                }
                
            }
            
            return {
                ...state,
                stack: array
            }
        case ADD_MAIN_IMAGE_PREVIEW: 
            return {
                ...state,
                imagePreview: action.preview
            }
        case ADD_IMAGE: 
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
            }
        default: 
            return state
    }
}

export default page