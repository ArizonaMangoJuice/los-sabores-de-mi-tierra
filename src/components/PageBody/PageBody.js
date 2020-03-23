import React from 'react'
import './PageBody.css'

export default function PageBody(props){
    return (
        <div className='page-body card-hover main-color'>
            <nav className='body-tools main-color'>
                <button className='body-tools'>
                    button
                </button>
                <button className='body-tools'>
                    button
                </button>
                <button className='body-tools'>
                    button
                </button>
            </nav>
            <textarea placeholder='enter your text here' className='pages-text-area main-color'>

            </textarea>
        </div>
    )
}