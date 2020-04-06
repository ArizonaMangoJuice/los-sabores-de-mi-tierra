import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchPages, login } from '../../actions';
import './Landing.css'
import BlogPage from '../BlogPage/BlogPage';

const mapStateToProps = state => {
    return {
        pages: state.landingPage.pages
    }
}

function Landing(props) {
    useEffect(()=> {
        if (props.pages.length === 0) {
            props.dispatch(fetchPages())
            props.dispatch(login())
        }
    })

    let pages = props.pages.map(page => (
        <Link to={`/blogPages/${page.title}`} 
          className='card border-dev relative' 
          style={typeof page.pictures[0][0].link === "string"
          ? {backgroundImage: `url(${page.pictures[0][0].link})`} 
          : {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media)`}} key={page._id}>
            <div className='words-container'>
                <p className='landing-page-title'>{page.title}</p>
                <p className='body-snippet'>{page.body[0].paragraph}</p>
            </div>
        </Link>
    ))

    return (
    <div className='full-page main-color'>
        <header className='header-container'>
                <Link to='/'>
                    <img className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                </Link>
        </header>
        <div className='recent-container'>
            <div className='recent-posts'>
                {pages}
            </div> 
        </div>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/blogPage'>BlogPage</Link>
    </div>);
}

export default connect(mapStateToProps)(Landing)
