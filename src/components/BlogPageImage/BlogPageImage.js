import React from 'react'

function BlogPageImage(props){
    return (
        <div className='blog-image card-hover'>
            <img src={props.src}/> 
        </div>
    )
}

export default BlogPageImage