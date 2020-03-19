import React from 'react'
import NavButton from '../NavButton/NavButton'
import './Nav.css'

export default class Nav extends React.Component{
    render(){
        return (
            <nav className='dashboard-nav'>
                <NavButton iconName="fas fa-home" name="Dashboard"  />
                <NavButton iconName="fas fa-laptop-code" name="Source" />
                <NavButton iconName="fab fa-wpforms" name="forms" />
                <NavButton iconName="far fa-file" name="pages" />
                <NavButton iconName="fas fa-power-off" name="logout" />
            </nav>
        )
    }
}