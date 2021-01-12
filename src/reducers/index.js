import {combineReducers} from 'redux'
import page from './page'
import landingPage from './landing'
import loginReducer from './login'
import blogPage from './blogPage'

export default combineReducers({
    page,
    landingPage,
    loginReducer,
    // blogPage
})