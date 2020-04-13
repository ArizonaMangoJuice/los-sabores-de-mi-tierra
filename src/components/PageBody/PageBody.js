import React, {useState} from 'react'
import './PageBody.css'
import { connect } from 'react-redux'
import {changeBody, newParagraph, addMainImage, addImage} from '../../actions'
import ImageUpload from '../ImageUpload/ImageUpload'
import PageAddLink from '../PageAddLink/PageAddLink'
import PageList from '../PageList/PageList'

const mapStateToProps = state => {
    return {
        body: state.page.body,
        stackCount: state.page.stack.length
    }
}

function PageBody(props){
    return (
        <div className='page-body card-hover main-color'>
            <nav className='body-tools-nav main-color relative'>
                <button onClick={() => props.dispatch(newParagraph(props.body, props.stackCount))} className='body-tools-button main-color'>
                    New Paragraph
                </button>
                
                <PageAddLink />

                <ImageUpload mainImage={true}/>
                    
                <ImageUpload mainImage={false} name={'Add Image'} />

                <PageList />
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