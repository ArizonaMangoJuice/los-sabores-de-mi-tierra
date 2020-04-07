import React, {useState} from 'react'
import './PageBody.css'
import { connect } from 'react-redux'
import {changeBody, newParagraph, addMainImage, addImage} from '../../actions'
import ImageUpload from '../ImageUpload/ImageUpload'

const mapStateToProps = state => {
    return {
        body: state.page.body,
        stackCount: state.page.stack.length
    }
}

function PageBody(props){
    const [linkClicked, setLinkClicked] = useState(false)

    return (
        <div className='page-body card-hover main-color'>
            <nav className='body-tools-nav main-color relative'>
                <button onClick={() => props.dispatch(newParagraph(props.body, props.stackCount))} className='body-tools-button main-color'>
                    New Paragraph
                </button>
                <div className='link-container relative'>
                    <button onClick={() => setLinkClicked(!linkClicked)} className='body-tools-button main-color'>
                        Add Link
                    </button>
                    <div className={linkClicked ? 'link-clicked' : 'hidden'}>
                       <label className='link-clicked-input'>
                            <p className='link-clicked-p'>Link Name</p>
                            <input type='text' />
                       </label>
                       
                       <label className='link-clicked-input'>
                            <p className='link-clicked-p'>href</p>
                            <input type='text' />
                       </label>
                    </div>
                </div>

                <ImageUpload mainImage={true}/>
                    
                <ImageUpload mainImage={false} name={'Add Image'} />
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