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

    let pages = props.pages.map(e => (
        <Link to={`/blogPages/${e.title}`}  className='card border-dev relative' key={e._id}>
            <div className='words-container'>
                <p className='landing-page-title'>{e.title}</p>
                <p className='body-snippet'>{e.body[0].paragraph}</p>
            </div>
        </Link>
    ))

    return (
    <div className='full-page main-color'>
        <header className='header-container'>
                <img className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
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
