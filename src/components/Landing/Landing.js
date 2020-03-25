import React, {useEffect} from 'react'
import { Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchPages } from '../../actions';
import './Landing.css'
const mapStateToProps = state => {
    return {
        pages: state.landingPage.pages
    }
}

function Landing(props) {
    useEffect(()=> {
        if (props.pages.length === 0)props.dispatch(fetchPages());
    })

    let pages = props.pages.map(e => (
        <div className='card border-dev relative'>
            <div className='words-container'>
                <p className='landing-page-title'>{e.title}</p>
                <p className='body-snippet'>{e.body}</p>
            </div>
        </div>
    ))
    
    return (
    <>
        <div className='recent-container'>
            <div className='recent-posts'>
                {pages}
            </div> 
        </div>
        <Link to='/dashboard'>Dashboard</Link>
    </>);
}

export default connect(mapStateToProps)(Landing)
