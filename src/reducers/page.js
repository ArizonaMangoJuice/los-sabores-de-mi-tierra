import { CHANGE_TITLE, 
        DELETE_PARAGRAPH, 
        ADD_MAIN_IMAGE, 
        ADD_IMAGE, 
        EDIT_PARAGRAPH,
        ADD_PARAGRAPH,
        DELETE_IMAGE,
        CHANGE_YOUTUBE_URL
    } from "../actions"

let initialState = {
    title: '',
    readTime: '',
    // body: '',
    // linkName: '',
    errror: undefined,
    success: undefined,
    // stack: [],
    // imagePreviews: [],
    // imagePreview: '',
    // linkStack: [],
    // hyperLink: '',
    // list: [], 
    youtubeUrl: '',
    history: []
}

const page = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TITLE: {
            return {
                ...state,
                title: action.title
            }
        }
        case CHANGE_YOUTUBE_URL: {
            return {
                ...state,
                youtubeUrl: action.url
            }
        }
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
        case DELETE_IMAGE: {
            let newHistory = state.history.filter(e => e.id !== action.id);
            // console.log('this is the new history after delete image', newHistory)
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