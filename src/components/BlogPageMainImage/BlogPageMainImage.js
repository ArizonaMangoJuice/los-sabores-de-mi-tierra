import React from 'react'

function BlogPageMainImage(props){
    return (
        <div className='blog-main-image card-hover'>
            <img alt='main-banner' src={props.src}/> 
        </div>
    )
}

export default BlogPageMainImage