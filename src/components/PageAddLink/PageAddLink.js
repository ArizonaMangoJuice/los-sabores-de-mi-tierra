import React, {useState} from 'react'
import './PageAddLink.css'

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
                    <input type='text' />
                </label>
                        
                <label className='link-clicked-input'>
                    <p className='link-clicked-p'>href</p>
                    <input type='text' />
                </label>
            </div>
        </div>

    )
}

export default PageAddLink