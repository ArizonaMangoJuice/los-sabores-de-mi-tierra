import React, {useState} from 'react'
import './PageAddLink.css'
import {connect} from 'react-redux'
import { addLinkName, addLink, addLinkStack } from '../../actions'

const mapStateToProps = state => ({
    body: state.page.body,
    linkName: state.page.linkName,
    hyperLink: state.page.hyperLink
})

function PageAddLink(props){
    const [linkClicked, setLinkClicked] = useState(false)
    
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

                <button onClick={() => props.linkName !== '' && props.hyperLink !== '' ? props.dispatch(addLinkStack(props.linkName, props.hyperLink)) : null}  className='body-tools-button main-color add-link-button'>
                    Add
                </button>
            </div>
        </div>

    )
}

export default connect(mapStateToProps)(PageAddLink)