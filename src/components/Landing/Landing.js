import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchPages } from '../../actions';
import './Landing.css'

const mapStateToProps = state => {
    return {
        pages: state.landingPage.pages
    }
}

// make a conditional checking if their is an auth token so it can login

function Landing(props) {
    useEffect(()=> {
        if (props.pages.length === 0) {
            props.dispatch(fetchPages())
            // props.dispatch(login())
        }
    })

    let pages = props.pages.map((page, i) => (
        <Link to={`/blogPages/${page.title}`} 
          className={i === 0 ? 'newest-card center-image-position card-hover relative' :'card card-hover relative'} 
          style={page.pictures && page.pictures[0] && page.pictures[0][0] && typeof page.pictures[0][0].link === "string"
          ? {backgroundImage: `url(${page.pictures[0][0].link})`} 
          : {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media)`}} key={page._id}>
            <div className={i === 0 ? 'newest-page-container card-hover' : 'words-container card-hover'}>
                <p className={i === 0 ? 'newest-landing-page-title' :'landing-page-title'}>{page.title}</p>
                {page.body && page.body[1] && page.body[1].paragraph ? <p className={i === 0 ? 'newest-body-snippet' :'body-snippet'}>{page.body[1].paragraph}</p> : null}
            </div>
        </Link>
    ))

    return (
    <div className='landing-page'>
        <header className='header-container'>
                <Link to='/'>
                    <img alt='isael-blogs-logo' className='image-logo card-hover' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                </Link>
        </header>
        <div className='recent-container '>
            <div className='recent-posts'>
                {pages}
            </div> 
        </div>
        {/* <Link to='/dashboard'>Dashboard</Link> */}
        {/* <Link to='/login'>Login</Link> */}
        {/* <Link to='/blogPage'>BlogPage</Link> */}
    </div>);
}

export default connect(mapStateToProps)(Landing)
