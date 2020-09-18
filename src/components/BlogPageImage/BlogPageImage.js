import React from 'react'

function BlogPageBanner(props){
    return (
        <div className='blog-banner-container '>
            <div className='blog-banner-image'>
                <img src='https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=8b1938d0d4ef26e336db84568708980a' />
            </div>
            <div className='blog-banner-desc'></div>
        </div>
    )
}

export default BlogPageBanner