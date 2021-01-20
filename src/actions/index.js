import Axios from "axios"
import jwtDecode from 'jwt-decode'
import {saveToken} from '../localStorage/localStorage'
// import {storage} from '../storage.rules'
import firebase, {storage} from '../base'

let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


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
export const ADD_LIST = 'ADD_LIST'
export const ADD_PARAGRAPH = 'ADD_PARAGRAPH'
export const DELETE_ITEM = 'DELETE_ITEM'
export const RESET_ID = 'RESET_ID'
export const EDIT_PARAGRAPH = 'EDIT_PARAGRAPH'
export const ADD_TITLE = 'ADD_TITLE'
export const DELETE_IMAGE = 'DELETE_IMAGE'
// action creators 
export function addListToState(list){
    return {
        type: ADD_LIST,
        list
    }
}

export function addLinkNameToBody(name, paragraphNumber){
    return {
        type: ADD_LINK_NAME_TO_BODY,
        data: {
            name,
            paragraphNumber
        }
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

export function addParagraph(itemId){
    return {
        type: ADD_PARAGRAPH,
        itemId
    }
}

export function deleteParagraph(id){
    return {
        type: DELETE_PARAGRAPH,
        id
    }
}

export function resethistoryId(){
    return {
        type: RESET_ID
    }
}

export function editParagraph(text,id){
    return {
        type: EDIT_PARAGRAPH,
            text,
            id
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

export function deleteImage(id){
    return {
        type: DELETE_IMAGE,
        id
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
            let uploadTask = storage.ref(`images/${image.image.name}`).put(image.image)
                uploadTask.on('state_changed', (snapshot) => {
                    // progress function 
                    console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
                    
                }, (error) => {
                    // error function
                    console.log(error) 
                    err = error
                }, (complete) => {
                    // complete function
                    storage.ref('images').child(image.image.name).getDownloadURL().then(url => {
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

export function submitPage(title, authToken, history) {
    let linkName = title;
    let finalTitle = title.trim();
    let images = history.filter(e => e.isImage);
    let imageIndex = [];

    // stack.forEach(e => e && e.name ? images.push(e) : null)
    history.forEach(e => e && e.isImage ? imageIndex.push(e.id) : null)
    console.log(imageIndex, images, 'this is the authtoken', authToken);
    return (dispatch) => {
        processArray(images, uploadImage)
            .then(result => {
                let count = 0;
                let i = 0;
                let finalHistory = [];
                //have to find a way to refactor this too overly complicated
                while(i < history.length){
                    if(history[i].isImage){
                        history[i] = {
                            ...history[i],
                            imageUrl: result[count],
                            name: history[i].image.name,
                        };
                        delete history[i].image;
                        delete history[i].imagePreview;
                        finalHistory.push(history[i]);
                        count++;
                    }else {
                        finalHistory.push(history[i]);
                    }
                    i++;
                }
                dispatch(clearPage());
                // let finalHistory = history.map((e) => e.isImage ? ({...e, imageUrl:}));
                console.log(finalHistory);

                Axios.post(`${REACT_APP_SERVER_URL}/api/user/post`, {
                    title: finalTitle,
                    history: finalHistory
                }, {
                    headers: {Authorization: `Bearer ${authToken}`}
                })
                .then(response => {
                    console.log('this is the create response');
                    dispatch(pageSuccess());
                })
                .catch( error => {
                    let title = error.response.data.message;
                    return dispatch(pageError())
                });
            })
            .catch(error => console.log(error));
    }
    
    // return (dispatch) => {
        
    //     processArray(images, uploadImage)
    //     .then(result => {
    //         let finalArray = result.map((e, i) => ({link: e, stackId: imageIndex[i]}))
    //         let pictures = [finalArray];
    //         dispatch(clearPage())
    //         title = title.trim()
    //         Axios.post(`${REACT_APP_SERVER_URL}/api/page`, {
    //             title,
    //             linkName,
    //             pictures,
    //         },{
    //             headers: { Authorization: `Bearer ${authToken}` }
    //         })
    //         .then(response => {
    //             console.log('response', response)
    //             dispatch(pageSuccess())
    //         })
    //         .catch(error => {
    //             let title = error.response.data.message
    //             return dispatch(pageError(title))
    //         })
    //     })
    //     .catch(e => console.log(e))
        
    // }
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
        Axios.get(`${REACT_APP_SERVER_URL}/api/user/post`)
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
        return Axios.get(`${REACT_APP_SERVER_URL}/api/user/post/${title}`)
            .then(response => {
                console.log('this is the response', response)
                // dispatch(addBlogTitle(response.data[0].title))
                // dispatch(fetchCompleted())
                // dispatch(addBlog(response.data[0]))
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