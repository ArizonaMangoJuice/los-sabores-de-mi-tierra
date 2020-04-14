import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchPages } from '../../actions';
import './Landing.css'
import SquareLoader from '../SquareLoader/SquareLoader';

const mapStateToProps = state => {
    return {
        pages: state.landingPage.pages
    }
}

// make a conditional checking if their is an auth token so it can login

function Landing(props) {
    useEffect(()=> {
        if (props.pages.length === 0) {
            setTimeout(() => {
             props.dispatch(fetchPages())
            }, 2000);
            // props.dispatch(login())
        }
    })

    let loadingDefault = []

    for(let i = 0; i < 9; i++){
        i === 0 
            ? loadingDefault.push(<div className='newest-card center-image-position card-hover relative main-color'><SquareLoader /></div>)
            : loadingDefault.push(<div className='card card-hover relative main-color'><SquareLoader /></div>)
        
    }

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
    <div className='full-page'>
        <div className='blur'>

        </div>
        <header className='header-container relative'>
                <Link to='/'>
                    <img alt='isael-blogs-logo' className='image-logo card-hover' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                </Link>
        </header>
        <div className='recent-container relative'>
            <div className='recent-posts'>
                {pages.length !== 0 ? pages : loadingDefault}
            </div> 
        </div>

    </div>);
}

export default connect(mapStateToProps)(Landing)
