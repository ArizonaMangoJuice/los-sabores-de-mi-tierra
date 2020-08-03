import rootReducer from '../reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import jwtDecode from 'jwt-decode'
import {loadToken} from '../localStorage/localStorage'
import { setAuthToken, authSuccess } from '../actions'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
)


// grab the authtoken from localStorage
const authToken = loadToken()

// if it is in local storage store in the store
if(authToken){
    const token = authToken;
    const decodedToken = jwtDecode(token);
    store.dispatch(setAuthToken(token));
    store.dispatch(authSuccess(decodedToken.user));
}

export default store 