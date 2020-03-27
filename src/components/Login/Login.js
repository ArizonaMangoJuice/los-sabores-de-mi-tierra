import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './Login.css'
import {connect} from 'react-redux'
import {login} from '../../actions'

const mapStateToProps = state => {
    return {
        authToken: state.loginReducer.authToken
    }
}

function Login(props){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(login(username,password))
    }

    return (
        <div className='page-container'>
            {props.authToken ? <Redirect to='/dashboard' /> : null}
            <div className='login-page-container'>
                <div className='login-container card-hover relative'>
                    <div className='logo half'>
                      <i class="far fa-user"></i>
                    </div>
                    <div className='login-form-container half'>
                        <form onSubmit={(e) => handleSubmit(e)} className='login-form'>
                            <input onChange={(e) => setUsername(e.target.value)} className='main-color card-hover' type='text' placeholder='Username' value={username}/>
                            <input onChange={(e) => setPassword(e.target.value)} className='main-color card-hover' type='password' placeholder='Password' value={password}/>
                            <button className='login-button card-hover'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Login)