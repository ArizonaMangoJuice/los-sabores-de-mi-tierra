import React from 'react'

export default function BlogPageParagraph({text, styling}){
    return (
        <div className='text'>
            <p className={`blog-page-paragraph ${styling}`}>
                {text}
            </p>
        </div>
    )
}