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
    let [error, setError] = useState('');

    console.log('username: ', username, 'password: ', password)
    console.log(props.authToken);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.length === 0 || password.length === 0){
            setError('One of the inputs is empty');
        } else {
            setError('');
            console.log('you hit the login button')
            props.dispatch(login(username,password))
        } 
    }
    let errorhtml = error.length != 0  
        ? <div className='form-error'>
            <p className='error-text'>{error}</p>
          </div> 
        : null;
    
    return (
        <div className='login-container'>
            {
                props.authToken 
                    ? <Redirect to='/admin' />
                    : null
            }
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
                        {errorhtml}
                        <input onChange={(e) => setUsername(e.target.value)} className='login-input-text' type='text' placeholder='Username' value={username}/>
                        <input onChange={(e) => setPassword(e.target.value)} className='login-input-text' type='password' placeholder='Password' value={password}/>
                        <button className='login-button'>Login</button>
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