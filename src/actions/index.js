import Axios from "axios"
import jwtDecode from 'jwt-decode'
import {saveToken} from '../localStorage/localStorage'

export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_BODY = 'CHANGE_BODY'
export const PAGE_ERROR = 'PAGE_ERROR'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const CLEAR_PAGE = 'CLEAR_PAGE'
export const NEW_PARAGRAPH = 'NEW_PARAGRAPH'
export const CHANGE_PARAGRAPH = 'CHANGE_PARAGRAPH'
export const DELETE_PARAGRAPH = 'DELETE_PARAGRAPH'

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

export function newParagraph(paragraph, stackId){
    console.log(stackId)
   return {
       type: NEW_PARAGRAPH,
       pData: {
        paragraph,
        stackId
    }   
   } 
}

export function changeParagraph(paragraph, stackId){
    return {
        type: CHANGE_PARAGRAPH,
        pData: {
            paragraph,
            stackId
        }
    }
}

export function deleteParagraph(stackId){
    return {
        type: DELETE_PARAGRAPH,
        stackId
    }
}

export function pageError(error){
    return {
        type: PAGE_ERROR,
        error
    }
}

export function pageSuccess(){
    return {
        type: PAGE_SUCCESS
    }
}

export function clearPage(){
    return {
        type: CLEAR_PAGE
    }
}

export function submitPage(title, body, authToken) {
    let linkName = title;
    return (dispatch) => {
        dispatch(clearPage())
        title = title.trim()
        Axios.post(`${REACT_APP_SERVER_URL}/api/page`, {
            title,
            body,
            linkName
        },{
            headers: { Authorization: `Bearer ${authToken}` }
        })
        .then(response => {
            console.log('response', response)
            dispatch(pageSuccess())
        })
        .catch(error => {
            let title = error.response.data.message
            return dispatch(pageError(title))
        })
    }
}

// **********************************************************
export const FETCH_PAGES = 'FETCH_PAGES'
export const ADD_PAGES = 'ADD_PAGES'
export const FETCH_PAGE = 'FETCH_PAGE'
export const FETCH_LOADING = 'FETCH_LOADING'
export const FETCH_COMPLETED = 'FETCH_COMPLETED'
export const ADD_BLOG = 'ADD_BLOG'
export const ADD_BLOG_TITLE = 'ADD_BLOG_TITLE'
export const CLEAR_BLOG_PAGE = 'CLEAR_BLOG_PAGE'

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

export function fetchPage(title){
    return (dispatch) => {
        dispatch(fetchLoading())
        Axios.get(`${REACT_APP_SERVER_URL}/api/page/${title}`)
            .then(response => {
                dispatch(addBlogTitle(response.data[0].title))
                dispatch(fetchCompleted())
                dispatch(addBlog(response.data[0]))
                console.log(response)
                return
            })
            .catch(error => {
                console.log(error)
                return 
            })
    }
}

export function fetchLoading(){
    return {
        type: FETCH_LOADING
    }
}

export function addBlog(data){
    return {
        type: ADD_BLOG,
        data
    }
}

export function addBlogTitle(title){
    return {
        type: ADD_BLOG_TITLE,
        title
    }
}

export function fetchCompleted(){
    return {
        type: FETCH_COMPLETED
    }
}

export function addPages(pages){
    return {
        type: ADD_PAGES,
        pages
    }
}

// **********************************************************
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const CLEAR_AUTH = 'CLEAR_AUTH'

export function setAuthToken(token){
    return {
        type: SET_AUTH_TOKEN,
        token
    }
}

export function authSuccess(user){
    return {
        type: AUTH_SUCCESS,
        user
    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        error
    }
}

export function clearAuth(){
    return {
        type: CLEAR_AUTH
    }
}

export const storeAuthInfo = (authToken, dispatch) => {
    const decodeToken = jwtDecode(authToken)
    dispatch(setAuthToken(authToken))
    dispatch(authSuccess(decodeToken.user))
    saveToken(authToken)
}

export const login = (username, password) => dispatch => {
    return (
        Axios.post(`${REACT_APP_SERVER_URL}/api/login`,{
            username: username,
            password: password
        })
        .then(response => {
            let authToken = response.data.authToken;
            console.log('this is the response',response);
            storeAuthInfo(authToken, dispatch)
            return
        })
        .catch(err => {
            // let {message} = err.error;
            // let message;
            //incorrect username or password on server side
            // if(message === 'Unauthorized'){
            //     message = 'Invalid username or password';
            // }else{
            //     message = 'Unable to login, please try again later';
            // }
            console.log('this is the erro',err)
            return 
        })
    )
}