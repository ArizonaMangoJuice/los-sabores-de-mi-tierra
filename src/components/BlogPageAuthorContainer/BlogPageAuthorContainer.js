import React from 'react'
import BlogPageAuthor from '../BlogPageAuthor/BlogPageAuthor'

function BlogPageAuthorContainer(props){
    return (
        <div className='blog-page-author-container'>
            <h4 className='blog-page-author-title'>THIS POST WAS A COLLABORATION BETWEEEN</h4>
            <BlogPageAuthor />
        </div>
    )
}

export default BlogPageAuthorContainer