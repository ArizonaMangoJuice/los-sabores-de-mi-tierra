import React from 'react'
import './Header.css'

export default function Header(){
    return (
        <header className='header'>
            <img className='logo' alt='los sabores de mi tierra' src={require('../../images/LSDMTLogo.png')}></img>
            <nav className='header-nav'>
                <ul className='nav-list'>
                    <li className='nav-list-font'><a className='link-style' href='google.com'>Features</a></li>
                    <li className='nav-list-font'><a className='link-style' href='google.com'>Recipes</a></li>
                    <li className='nav-list-font'><a className='link-style' href='google.com'>Memberships</a></li>
                    <li className='sign-in nav-list-user-button sign-in'>Sign In</li>
                    <li className='sign-up nav-list-user-button sign-up'>Sign Up</li>
                </ul>
            </nav>
        </header>
    )
}