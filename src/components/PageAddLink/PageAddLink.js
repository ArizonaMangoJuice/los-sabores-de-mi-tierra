import React, {useState} from 'react'
import './PageAddLink.css'
import {connect} from 'react-redux'
import { addLinkName, addLink, addLinkStack, clearLink, clearLinkName, addLinkNameToBody } from '../../actions'

const mapStateToProps = state => ({
    body: state.page.body,
    linkName: state.page.linkName,
    hyperLink: state.page.hyperLink,
    stack: state.page.stack
})

function PageAddLink(props){
    const [linkClicked, setLinkClicked] = useState(false)
    let paragraphCount = props.stack.length
    console.log(paragraphCount)

    return (
        <div className='link-container relative'>
            <button onClick={() => setLinkClicked(!linkClicked)} className='body-tools-button main-color'>
                Add Link
            </button>
            <div className={linkClicked ? 'link-clicked' : 'hidden'}>
                <label className='link-clicked-input'>
                    <p className='link-clicked-p'>Link Name</p>
                    <input onChange={(e) => props.dispatch(addLinkName(e.target.value))} value={props.linkName} type='text' />
                </label>
                        
                <label className='link-clicked-input'>
                    <p className='link-clicked-p'>href</p>
                    <input onChange={(e) => props.dispatch(addLink(e.target.value))} value={props.hyperLink} type='text' />
                </label>

                <button onClick={() => props.linkName !== '' && props.hyperLink !== '' 
                                ? props.dispatch(addLinkStack(props.linkName, props.hyperLink, paragraphCount)) && 
                                    props.dispatch(clearLink()) && 
                                    props.dispatch(clearLinkName()) && 
                                    props.dispatch(addLinkNameToBody(props.linkName, paragraphCount)) &&                                     
                                    setLinkClicked(!linkClicked)
                                : null}  
                        className='body-tools-button main-color add-link-button'>
                    Add
                </button>
            </div>
        </div>

    )
}

export default connect(mapStateToProps)(PageAddLink)