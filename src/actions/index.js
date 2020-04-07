import Axios from "axios"
import jwtDecode from 'jwt-decode'
import {saveToken} from '../localStorage/localStorage'
import {storage} from '../firebase'
import { ImageUpload } from "../components/ImageUpload/ImageUpload"

export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_BODY = 'CHANGE_BODY'
export const PAGE_ERROR = 'PAGE_ERROR'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const CLEAR_PAGE = 'CLEAR_PAGE'
export const NEW_PARAGRAPH = 'NEW_PARAGRAPH'
export const CHANGE_PARAGRAPH = 'CHANGE_PARAGRAPH'
export const DELETE_PARAGRAPH = 'DELETE_PARAGRAPH'
export const ADD_MAIN_IMAGE = 'ADD_MAIN_IMAGE'
export const ADD_MAIN_IMAGE_PREVIEW = 'ADD_MAIN_IMAGE_PREVIEW'
export const ADD_IMAGE = 'ADD_IMAGE'
export const ADD_IMAGE_PREVIEW = 'ADD_IMAGE_PREVIEW'
export const ADD_LINK_NAME = 'ADD_LINK_NAME'
export const ADD_LINK = 'ADD_LINK'
export const ADD_LINK_STACK = 'ADD_LINK_STACK'
export const CLEAR_LINKNAME = 'CLEAR_LINKNAME'
export const CLEAR_LINK = 'CLEAR_LINK'
export const ADD_LINK_NAME_TO_BODY = 'ADD_LINK_NAME_TO_BODY'

let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// action creators 
export function addLinkNameToBody(name){
    return {
        type: ADD_LINK_NAME_TO_BODY,
        name
    }
}

export function clearLink(){
    return {
        type: CLEAR_LINK
    }
}

export function clearLinkName(){
    return {
        type: CLEAR_LINKNAME
    }
}

export function addLinkStack(name,link,count){
    return {
        type: ADD_LINK_STACK,
        data: {
            name, 
            link,
            count
        }
    }
}

export function addLink(name){
    return {
        type: ADD_LINK,
        name
    }
}


export function addLinkName(name){
    return {
        type: ADD_LINK_NAME,
        name
    }
}

export function addImage(image, link){
    return {
        type: ADD_IMAGE,
        data: 
        {
            image,
            link
        }
    }
}

export function addImagePreview(preview){
    return {
        type: ADD_IMAGE_PREVIEW,
        preview
    }
}

export function addMainImage(image){
    return {
        type: ADD_MAIN_IMAGE,
        image
    }
}

export function addMainImagePreview(preview){
    return {
        type: ADD_MAIN_IMAGE_PREVIEW,
        preview
    }
}

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
    // console.log(stackId)
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
// have to make this be able to upload multiple images and return array of links in order
    function uploadImage(image) {
        return new Promise ((resolve, reject) => {
            let err
            let uploadTask = storage.ref(`images/${image.name}`).put(image)
                uploadTask.on('state_changed', (snapshot) => {
                    // progress function 
                    console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
                    
                }, (error) => {
                    // error function
                    console.log(error) 
                    err = error
                }, (complete) => {
                    // complete function
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        // console.log(url.split('&').shift())
                        let imageStub = url.split('&').shift()
                        if(err){
                            reject()
                        } else {
                            resolve(imageStub)
                            // return imageStub
                        }
                    })
                })
        })
    }

// returns an array of the promises it completed
function processArray(arr, fn) {
        return arr.reduce(
            (p, v) => p.then((a) => fn(v).then(r => a.concat([r]))),
            Promise.resolve([])
        );
}

export function submitPage(title, body, authToken, stack) {
    let linkName = title;
    let images = []
    let imageIndex = []

    stack.forEach(e => e && e.name ? images.push(e) : null)
    stack.forEach(e => e && e.name ? imageIndex.push(e.stackId) : null)
    // console.log('///////////')
    // processArray(images, uploadImage).then(console.log)

    return (dispatch) => {
        
        // console.log('imageLinks', imageLinks)
        processArray(images, uploadImage)
        .then(result => {
            // console.log('test', result)
            let finalArray = result.map((e, i) => ({link: e, stackId: imageIndex[i]}))
            let pictures = [finalArray];
            // console.log('image', pictures)
            dispatch(clearPage())
            title = title.trim()
            Axios.post(`${REACT_APP_SERVER_URL}/api/page`, {
                title,
                body,
                linkName,
                pictures
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
        })
        .catch(e => console.log(e))
        
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
                // console.log(response.data)
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
        return Axios.get(`${REACT_APP_SERVER_URL}/api/page/${title}`)
            .then(response => {
                dispatch(addBlogTitle(response.data[0].title))
                dispatch(fetchCompleted())
                dispatch(addBlog(response.data[0]))
                // console.log(response)
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
            // console.log('this is the response',response);
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
            // console.log('this is the erro',err)
            return 
        })
    )
}