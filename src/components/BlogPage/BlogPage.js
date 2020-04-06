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

    if(blog && blog.body && (blog.body.length !== 0)){
        for(let i = 0; i < blog.body.length; i++){

            let blogBodyId = blog.body[i].stackId
            
            for(let k = 0; k < blog.pictures[0].length; k++){

                if(blogBodyId == blog.pictures[0][k].stackId){
                    blog.body[i].link = blog.pictures[0][k].link
                }
            }
        }
        // console.log(blog.body)
    }
    
    
    if(blog.body !== undefined){
        blogPage = blog.body.map((stack, i) => (
           stack.link && stack.stackId !== 0 ? <BlogPageImage className='blog-image' key={'image ' + i} src={stack.link} /> :<BlogPageParagraph key={'paragraph ' + i} paragraph={stack.paragraph} />
        ))
    }

    return (
        <div className='full-page blog-settings'>
            <div className='blog-width main-color card-hover'> 
                <header className='header-container'>
                    <Link to='/'>
                        <img className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                    </Link>
                </header>
                
                {blog.pictures && (typeof blog.pictures[0][0].link === "string")  ? <BlogPageMainImage src={blog.pictures[0][0].link} /> : null}

                {props.title ? <BlogPageTitle title={props.title} /> : <h1>loading</h1>}

                {blogPage}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BlogPage)