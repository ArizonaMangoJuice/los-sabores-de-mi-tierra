import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {connect} from 'react-redux'

function Header(props){
    // console.log('inside the header', props)
    return (
        <header className='header'>
            <Link to='/'>
                <img className='logo' alt='los sabores de mi tierra' src={require('../../images/LSDMTLogo.png')}></img>
            </Link>
            <nav className='header-nav'>
                <ul className='nav-list'>
                    {/* <li className='nav-list-font'><a className='link-style' href=''>Features</a></li>
                    <li className='nav-list-font'><a className='link-style' href=''>Recipes</a></li>
                    <li className='nav-list-font'><a className='link-style' href=''>Memberships</a></li> */}
                    <Link to='/login'>
                        <li className='sign-in nav-list-user-button sign-in'>Sign In</li>
                    </Link>
                    {/* <li  className='sign-up nav-list-user-button sign-up'>Sign Up</li> */}
                </ul>
            </nav>
        </header>
    )
}

export default connect()(Header)