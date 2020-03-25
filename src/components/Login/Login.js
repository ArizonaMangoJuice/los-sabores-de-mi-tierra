import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import './Login.css'
import {connect} from 'react-redux'
import login from '../../actions'

function Login(props){
    return (
        <div className='page-container'>
            <div className='login-page-container'>
                <div className='login-container'>
                    <div className='logo half'>
                      <i class="far fa-user"></i>
                    </div>
                    <div className='login-form-container half'>
                        <form className='login-form'>
                            <input className='main-color card-hover' type='text' placeholder='Username'/>
                            <input className='main-color card-hover' type='password' placeholder='Password'/>
                            <button className='login-button card-hover'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(Login)