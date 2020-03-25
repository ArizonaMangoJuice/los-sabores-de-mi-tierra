import Axios from "axios"

export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_BODY = 'CHANGE_BODY'

let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// action creators 

export function changeTitle(title){
    return {
        type: CHANGE_TITLE,
        title
    }
}

export function changeBody(body){
    return {
        type: CHANGE_BODY,
        body
    }
}

// **********************************************************
export const FETCH_PAGES = 'FETCH_PAGES'
export const ADD_PAGES = 'ADD_PAGES'

// thunk action for getting the pages in the front page

export function fetchPages(){
    return (dispatch) => {
        // dispatch()
        Axios.get(`${REACT_APP_SERVER_URL}/api/page`)
            .then(response => {
                dispatch(addPages(response.data))
                console.log(response.data)
                return
            })
            .catch(error => {
                console.log(error)
                return
            })
    }
}

export function addPages(pages){
    return {
        type: ADD_PAGES,
        pages
    }
}
