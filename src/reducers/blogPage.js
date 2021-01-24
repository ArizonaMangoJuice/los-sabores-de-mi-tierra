import { FETCH_LOADING, FETCH_COMPLETED, ADD_BLOG, ADD_BLOG_TITLE, ADD_BLOG_URL } from "../actions"

let initialState = {
    loading: false,
    completed: false,
    title: '',
    blog: []
}

const blogPage = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LOADING: {
            return {
                ...state,
                loading: true,
                completed: false
            }
        }
        case FETCH_COMPLETED: {
            return {
                ...state,
                loading: false,
                completed: true
            }
        }
        case ADD_BLOG_URL: {
            return {
                ...state,
                blogUrl: action.url
            }
        }
        case ADD_BLOG: {
            return {
                ...state,
                blog: action.data
            }
        }
        case ADD_BLOG_TITLE: {
            return {
                ...state,
                title: action.title
            }
        }
        default:
            return state
    }
}

export default blogPage