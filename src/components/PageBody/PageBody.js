import React from 'react'
import './PageBody.css'
import { connect } from 'react-redux'
import {changeBody} from '../../actions'

const mapStateToProps = state => {
    return {
        title: state.page.title,
        body: state.page.body,
        linkName: state.page.linkName
    }
}

function PageBody(props){
    return (
        <div className='page-body card-hover main-color'>
            <nav className='body-tools-nav main-color'>
                <button className='body-tools-button main-color'>
                    button
                </button>
                <button className='body-tools-button main-color'>
                    button
                </button>
                <button className='body-tools-button main-color'>
                    button
                </button>
            </nav>
            <textarea 
                onChange={(e) => props.dispatch(changeBody(e.target.value))} 
                placeholder='enter your text here' 
                className='pages-text-area main-color' 
                value={props.body}
            >

            </textarea>
        </div>
    )
}

export default connect(mapStateToProps)(PageBody)