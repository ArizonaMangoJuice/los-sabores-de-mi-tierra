import { STORE_BLOG_POSTS } from "../actions";

let initialState = {
    articles: [],
    loading: false,

};

const editPageBlog = (state = initialState, action) => {
    switch(action.type){
        case STORE_BLOG_POSTS : {
            return {
                ...state,
                articles: action.result
            }
        }

        default: return state;
    }
}

export default editPageBlog;