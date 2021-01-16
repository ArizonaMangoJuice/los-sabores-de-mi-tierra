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
            let array = [];
            let count = 0;

            for(let i = 0; i < state.history.length; i++){
                if(state.history[i].id === id){
                    continue;
                } else {
                    let updatedId = {
                        id: `p${count}`,
                        text: state.history[i].text
                    };
                    array.push(updatedId);
                    count++;
                }
            }

            console.log('this is the array')
            return {
                ...state,
                history: array
            }
        }
        case EDIT_PARAGRAPH: {
            let {id, text} = action;
            console.log('editing from edit action', id)
            let array = [];
            for(let i = 0; i < state.history.length; i++){
                if(state.history[i].id === id){
                    array.push({
                        text,
                        id
                    })
                } else {
                    array.push(state.history[i])
                }
            }
            return {
                ...state,
                history: array
            }
        }
        default: 
            return state
    }
}

export default page