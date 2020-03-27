import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { submitPage } from '../../actions';

const mapStateToProps = state => ({
    body: state.page.body,
    title: state.page.title,
    authToken: state.loginReducer.authToken
})

function Pages(props){
        let {title, authToken, body} = props
        // console.log('insisde the page props', title, authToken, body)

        return (
            <div className='dashboard-container'>
                <Banner title='Create A New Blog!' />
                <PageTitleInput />
                <div className='main-page '>
                    <PageBody />
                    <div className='page-body page-settings main-color'>
                            <button onClick={() => props.dispatch(submitPage(title, body, authToken))}>
                                Create Page 
                            </button>
                    </div>
                </div>
            </div>
        )
}

export default connect(mapStateToProps)(Pages)