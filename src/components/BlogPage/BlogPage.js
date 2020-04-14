import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './BlogPage.css'
import BlogPageParagraph from '../BlogPageParagraph/BlogPageParagraph'
import BlogPageTitle from '../BlogPageTitle/BlogPageTitle'
import BlogPageImage from '../BlogPageImage/BlogPageImage'
import BlogPageMainImage from '../BlogPageMainImage/BlogPageMainImage'
import { useParams, Link } from 'react-router-dom'
import { fetchPage } from '../../actions'
import SquareLoader from '../SquareLoader/SquareLoader'

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

    useEffect(() => {
        if(!props.title || title !== props.title) props.dispatch(fetchPage(title))
    })

    // useEffect(() => {
    //     if(!props.title || title !== props.title) props.dispatch(fetchPage(title))
    // }, [])

    // checks to see if there is a pictures arraty and checks to see if theyre is a body array
    if((blog && blog.pictures && blog.pictures.length !== 0) && (blog && blog.body && blog.body.length !== 0)){
        for(let i = 0; i < blog.body.length; i++){

            let blogBodyId = blog.body[i].stackId
            
            for(let k = 0; k < blog.pictures[0].length; k++){

                if(blogBodyId === blog.pictures[0][k].stackId){
                    blog.body[i].link = blog.pictures[0][k].link
                }
            }
        }
    }
 
    if(blog.body !== undefined){
        blogPage = blog.body.map((stack, i) => (
           stack.link && stack.stackId !== 0 
           ? <BlogPageImage className='blog-image' key={'image ' + i} src={stack.link} /> 
           : stack.listArray 
        ?  stack.isOrdered ? <ol>{stack.listArray.map(e => (<li className='' key={e + '' + e.stackId}>{e}</li>))}</ol> : <ul>{stack.listArray.map(e => (<li className='' key={e + '' + e.stackId}>{e}</li>))}</ul> 
                : blog.linkStack 
                    ? <BlogPageParagraph key={'paragraph ' + i} paragraph={stack.paragraph} linkStack={blog.linkStack}/> 
                    : <BlogPageParagraph key={'paragraph ' + i} paragraph={stack.paragraph} />
        ))
    }

    return (
        <div className='full-page blog-settings relative'>
            <div className='blur'></div>
            <div className='blog-width main-color card-hover relative'> 
                <header className='header-container'>
                    <Link to='/'>
                        <img alt='isaels blog logo' className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                    </Link>
                </header>
                
                {/* if their is a main image add it */}
                {blog.pictures && blog.pictures[0] && blog.pictures[0][0] && (typeof blog.pictures[0][0].link === "string")  ? <BlogPageMainImage src={blog.pictures[0][0].link} /> : null}
                {/* if their is a title  add it or say that its loading */}
                {props.title ? <BlogPageTitle title={props.title} /> : <SquareLoader />}

                {blogPage}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BlogPage)