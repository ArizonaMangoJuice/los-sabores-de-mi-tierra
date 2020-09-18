import React from 'react'
import BlogPageBanner from '../BlogPageImage/BlogPageImage'
import './BlogPage.css'

export default function BlogPage(props){
    return (
        <>
            <div className='blog-page-container'>
                <BlogPageBanner />
            </div>
        </>       
    )
}