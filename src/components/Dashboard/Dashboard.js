import React from 'react'
import Nav from '../Nav/Nav'
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        authToken: state.loginReducer.authToken
    }
}

function Dashboard (props){
        return (
            <div className='dashboard'>
                {!props.authToken ? <Redirect to='/' /> : null}
                <Nav />
            </div>
        )
}

export default connect(mapStateToProps)(Dashboard)