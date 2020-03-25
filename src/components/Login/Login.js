import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import './Login.css'
import {connect} from 'react-redux'
import login from '../../actions'

function Login(props){
    return (
        <div className='page-container border-dev'>
            <div className='-login-page-container'>
                <div className='login-container border-dev'>
                    <div className='logo half border-dev'>
                      <i class="far fa-user"></i>
                    </div>
                    <div className='login-form half border-dev'>
                        <form>
                            <input type='text' />
                            <input type='password'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(Login)