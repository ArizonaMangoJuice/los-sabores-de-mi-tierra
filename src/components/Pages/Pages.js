import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { submitPage } from '../../actions';
import ImageUpload from '../ImageUpload/ImageUpload';

const mapStateToProps = state => ({
    body: state.page.body,
    title: state.page.title,
    error: state.page.error,
    success: state.page.success,
    authToken: state.loginReducer.authToken
})

function Pages(props){
        let {title, authToken, body} = props
        // console.log('insisde the page props', title, authToken, body)

        return (
            <div className='dashboard-container'>
                <Banner title='Create A New Blog!' />
                {
                props.error ?
                    <div className='error-background page-error card-hover' >
                        <p className='error-msg'>{props.error}</p> 
                    </div>
                    : null
                }
                {props.success ? 
                    <div className='success-background page-success card-hover' >
                        <p className='success-msg'>{props.success}</p> 
                    </div>
                    : null
                }
                <PageTitleInput />
                <div className='main-page '>
                    <PageBody />
                    <div className='page-body page-settings main-color'>
                            <button className='dashboard-button nav-button' onClick={() => props.dispatch(submitPage(title, body, authToken))}>
                                Create Page 
                            </button>
                            <ImageUpload />
                    </div>
                </div>
            </div>
        )
}

export default connect(mapStateToProps)(Pages)