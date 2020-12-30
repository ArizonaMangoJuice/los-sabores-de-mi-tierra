import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './Login.css'
import {connect} from 'react-redux'
import {login} from '../../actions'

console.log('inside the login');

const mapStateToProps = state => {
    return {
        // state,  
        authToken: state.loginReducer.authToken ? state.loginReducer.authToken : '' 
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
        <div className='login-container'>
            <div className='login-image'></div>
            <div className='login-login-container'>
                <h1>Welcome Back</h1>
                <p>Sign Into Your Account</p>
                {/* /login-form-container half */}
                    <div className='back-link'>
                        <div className='left-arrow'></div>
                        <h4>Back to Homepage</h4>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className='login-form'>
                        <input onChange={(e) => setUsername(e.target.value)} className='login-input-text' type='text' placeholder='Username' value={username}/>
                        <input onChange={(e) => setPassword(e.target.value)} className='login-input-text' type='password' placeholder='Password' value={password}/>
                        <button className='login-button card-hover'>Login</button>
                    </form>
                    {/* this will be random quotes soon tm */}
                    <div className='sign-in-quotes'>
                        <p><span>LSDMT.</span> Recipes, thoughts, ideas.</p> 
                    </div>
            </div>
            {/* {props.authToken ? <Redirect to='/dashboard' /> : null}
            <div className='login-page-container'>
                <div className='login-container card-hover relative'>
                    <div className='logo half'>
                      <i className="far fa-user"></i>
                    </div>
                    <div className='login-form-container half'>
                        <form onSubmit={(e) => handleSubmit(e)} className='login-form'>
                            <input onChange={(e) => setUsername(e.target.value)} className='main-color card-hover' type='text' placeholder='Username' value={username}/>
                            <input onChange={(e) => setPassword(e.target.value)} className='main-color card-hover' type='password' placeholder='Password' value={password}/>
                            <button className='login-button card-hover'>Login</button>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default connect(mapStateToProps)(Login)