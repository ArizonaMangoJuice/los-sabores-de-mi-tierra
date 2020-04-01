import React from 'react'
import './PageBody.css'
import { connect } from 'react-redux'
import {changeBody, newParagraph, addMainImage} from '../../actions'

const mapStateToProps = state => {
    return {
        body: state.page.body,
        stackCount: state.page.stack.length
    }
}

function PageBody(props){
    return (
        <div className='page-body card-hover main-color'>
            <nav className='body-tools-nav main-color'>
                <button onClick={() => props.dispatch(newParagraph(props.body, props.stackCount))} className='body-tools-button main-color'>
                    New Paragraph
                </button>
                <label onChange={(e) => e.target.files[0] 
                                        ? props.dispatch(addMainImage(e.target.files[0])) 
                                        : null
                                } 
                        className=" body-tools-button custom-file-upload">
                    <input type="file"/>
                    <i className="fas fa-upload icon-margin"></i> Add Main Image
                </label>
                {/* <button className='body-tools-button main-color'>
                    
                </button> */}
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