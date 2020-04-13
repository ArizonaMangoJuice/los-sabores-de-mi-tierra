import React from 'react'

function BlogPageImage(props){
    return (
        <div className='blog-image '>
            <img alt='blog-reference' src={props.src}/> 
        </div>
    )
}

export default BlogPageImage