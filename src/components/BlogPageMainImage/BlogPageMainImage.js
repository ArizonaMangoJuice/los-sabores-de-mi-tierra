import React from 'react'

function BlogPageMainImage(props){
    return (
        <div className='blog-main-image card-hover'>
            <img src={props.src}/> 
        </div>
    )
}

export default BlogPageMainImage