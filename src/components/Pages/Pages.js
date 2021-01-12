import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { submitPage} from '../../actions';
import ParagraphHistory from '../ParagraphHistory/ParagraphHistory';

const mapStateToProps = state => ({
    body: state.page.body,
    title: state.page.title,
    error: state.page.error,
    success: state.page.success,
    authToken: state.loginReducer.authToken,
    stack: state.page.stack,
    imagePreview: state.page.imagePreview,
    linkStack: state.page.linkStack
})

function Pages(props){
        let {title, authToken, stack} = props
        // this will be a seperate component 
        let stackHistory = props.stack.map((element, i) => {
            
            if(props.imagePreview && element.name && element.stackId === 0){
                return (<div key={'stack ' + i} className='image-history main-color card-hover'>
                    <img
                        className='stack-history-image'
                        src={props.imagePreview}
                        alt={element.name}/>
                </div>)
                
            } else if(element.paragraph || element.paragraph === ''){
                return (    
                    <ParagraphHistory
                        key={'stack ' + i}
                        stackId={i}
                        paragraph={element.paragraph}/>)
            } else if(element.isOrdered){
                return (
                    <div className='main-color list-history card-hover'>
                        <ol>
                            {element.listArray.map(e => (
                                <li>{e}</li>
                            ))}
                        </ol>
                    </div>
                )
            } else if(!element.isOrdered && element.listArray){
                return (
                    <div className='main-color list-history card-hover'>
                        <ul>
                            {element.listArray.map(e => (
                                <li>{e}</li>
                            ))}
                        </ul>
                    </div>
                )
            } else {
                return (<div key={'stack ' + i} className='image-history main-color'>
                    <img
                        className='stack-history-image'
                        src={element.link}
                        alt={element.name}/>
                </div>)
            }
            
        })
        return (
            <div className='dashboard-container'>
                <Banner title='Create A New Blog!' />
                <ParagraphForm />
                {
                    // refactor this into its own component
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
                            <button className='dashboard-button nav-button' onClick={() => props.dispatch(submitPage(title, stack, authToken, props.stack, props.linkStack))}>
                                Create Page 
                            </button>
                            
                    </div>
                    <div className='page-body page-settings '>
                            {stackHistory}
                            {/* <ImageUpload /> */}
                    </div>
                </div>
            </div>
        )
}

function ParagraphForm(props){
    return (
        <div className='new-paragraph'>
            <nav className='paragraph-nav'>
                <ul className='paragraph-list'>
                    <li>
                        <button>
                            Move
                        </button>
                    </li>
                    <li>
                        <button>
                            X
                        </button>
                    </li>
                </ul>
            </nav>
            <textarea 
                className='paragraph-input'
            />
        </div>
    )
}

export default connect(mapStateToProps)(Pages)