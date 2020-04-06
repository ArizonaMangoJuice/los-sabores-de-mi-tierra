import React, { useEffect, useMountEffect } from 'react'
import {connect} from 'react-redux'
import './BlogPage.css'
import BlogPageParagraph from '../BlogPageParagraph/BlogPageParagraph'
import BlogPageSubTitles from '../BlogPageSubTitles/BlogPageSubTitles'
import BlogPageTitle from '../BlogPageTitle/BlogPageTitle'
import BlogPageImage from '../BlogPageImage/BlogPageImage'
import BlogPageMainImage from '../BlogPageMainImage/BlogPageMainImage'
import { useParams, Link } from 'react-router-dom'
import { fetchPage } from '../../actions'

const mapStateToProps = state => ({
    title: state.blogPage.title,
    loading: state.blogPage.loading,
    completed: state.blogPage.completed,
    blog: state.blogPage.blog,
    mainImage: state.blogPage.pictures
})

function BlogPage(props){
    let {title} = useParams()
    let {blog} = props
    let blogPage
    let count = 0

    useEffect(() => {
        if(!props.title || title !== props.title) props.dispatch(fetchPage(title))
        if(count)count++
    }, [])

    
    if(blog.body !== undefined){
        blogPage = blog.body.map((e, i) => (
           <BlogPageParagraph key={'paragraph ' + i} paragraph={e.paragraph} />
        ))
    }


    console.log('this is the count', count)
    return (
        <div className='full-page blog-settings'>
            <div className='blog-width main-color card-hover'> 
                <header className='header-container'>
                    <Link to='/'>
                        <img className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                    </Link>
                </header>
                
                {blog && (blog.pictures && blog.pictures[0])  ? <BlogPageMainImage src={blog.pictures[0][0]} /> : null}

                {props.title ? <BlogPageTitle title={props.title} /> : <h1>loading</h1>}

                {blogPage}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BlogPage)