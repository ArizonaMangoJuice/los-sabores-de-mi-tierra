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
        ADD_PARAGRAPH,
    } from "../actions"

let initialState = {
    // title: '',
    // body: '',
    // linkName: '',
    // errror: undefined,
    // success: undefined,
    // stack: [],
    // imagePreviews: [],
    // imagePreview: '',
    // linkStack: [],
    // hyperLink: '',
    // list: [], 
    history: []
}

const page = (state = initialState, action) => {
    switch(action.type){
        case ADD_MAIN_IMAGE:{
            let image = action.image;

            let newHistory = [{
                mainImage: true,
                isImage: true,
                image,
                imagePreview: URL.createObjectURL(image),
                id: `i${0}` 
            }, ...state.history];

            newHistory = newHistory.map((e, i) => e.isImage ? ({
                ...e,
                id: `i${i}`
            }) : ({
                ...e,
                id: `p${i}`
            }))
            
            return {
                ...state,
                history: newHistory
            }
        }
        case ADD_IMAGE: {
            let image = action.data.image;

            let newHistory = [...state.history,{
                mainImage: false,
                isImage: true,
                image,
                imagePreview: URL.createObjectURL(image),
                id: `i${state.history.length}`
            }]

            newHistory = newHistory.map((e, i) => e.isImage ? ({
                ...e,
                id: `i${i}`
            }) : ({
                ...e,
                id: `p${i}`
            }));

            return {
                ...state,
                history: newHistory
            }
        }
        case ADD_PARAGRAPH:{
            return {
                ...state,
                history: [...state.history, {
                    id: 'p' + action.itemId,
                    text: ''
                }]
            }}
        case DELETE_PARAGRAPH:{
            let {id} = action;
           
            let newHistory = state.history
                .filter(e => e.id !== id)
                .map((e, i) => ({...e, id: `p${i}`}));

            return {
                ...state,
                history: newHistory
            }
        }
        case EDIT_PARAGRAPH: {
            let {id, text} = action;
            
            let newHistory = state.history.map((e) => 
                e.id === id 
                ? {text, id}
                : {...e})

            return {
                ...state,
                history: newHistory
            }
        }
        default: 
            return state
    }
}

export default page