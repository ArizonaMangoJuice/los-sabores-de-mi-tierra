import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { submitPage, changeParagraph, deleteParagraph } from '../../actions';
import ImageUpload from '../ImageUpload/ImageUpload';

const mapStateToProps = state => ({
    body: state.page.body,
    title: state.page.title,
    error: state.page.error,
    success: state.page.success,
    authToken: state.loginReducer.authToken,
    stack: state.page.stack,
})

function Pages(props){
        let {title, authToken, body} = props
        // console.log('insisde the page props', title, authToken, body)
        // this will be a seperate component 
        let stackHistory = props.stack.map((element, i) => (
            <div className='main-color'>
                <div className='body-tools-nav'>
                    <button
                        className='body-tools-button main-color' 
                        onClick={() => props.dispatch(deleteParagraph(i))}>DELETE</button>
                </div>
                <textarea
                    key={'stack ' + i}
                    value={element.paragraph}
                    onChange={(e) => props.dispatch(changeParagraph(e.target.value, i ))}
                    className='main-color history-paragraphs card-hover'
                />
            </div>
        ))
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
                            {/* <ImageUpload /> */}
                    </div>
                    <div className='page-body page-settings '>
                            {stackHistory}
                            {/* <ImageUpload /> */}
                    </div>
                </div>
            </div>
        )
}

export default connect(mapStateToProps)(Pages)