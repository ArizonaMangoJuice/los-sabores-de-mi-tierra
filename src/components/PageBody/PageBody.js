import React from 'react'
import './PageBody.css'

export default function PageBody(props){
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
            <textarea placeholder='enter your text here' className='pages-text-area main-color'>

            </textarea>
        </div>
    )
}