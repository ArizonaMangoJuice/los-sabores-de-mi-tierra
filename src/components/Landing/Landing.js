import React, {useEffect} from 'react'
import { Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchPages } from '../../actions';

const mapStateToProps = state => {
    return {
        pages: state.landingPage.pages
    }
}

function Landing(props) {
    useEffect(()=> {
        if (props.pages.length === 0)props.dispatch(fetchPages());
    })

    return (
    <>
     <h1>
         HELLO 
     </h1>   
    <Link to='/dashboard'>Dashboard</Link>

    </>);
}

export default connect(mapStateToProps)(Landing)