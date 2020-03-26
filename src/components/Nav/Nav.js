import React from 'react'
import NavButton from '../NavButton/NavButton'
import './Nav.css'
import { isCompositeComponent } from 'react-dom/test-utils'
import {connect} from 'react-redux'
import { clearAuth } from '../../actions'
// this will be moved when i use redux
let colors = ['#e6463c', '#ee7f1e', '#6450c8', '#6cb4dd'];
let text = ['Dashboard', 'Source', 'Forms', 'Pages'];
let icons = ['fa-home','fa-laptop-code','fa-wpforms','fa-file'];
let color = Math.floor(Math.random() * Math.floor(5));
let to = ['home','source', 'forms', 'pages']

const borderStyle = {
    borderLeft: `4px solid ${colors[color]}`
}


class Nav extends React.Component{
    render(){
        let NavButtons = colors.map((e, i) => (
            <NavButton iconName={`fas ${icons[i]}`} 
                name={text[i]} 
                color={e}
                border={{borderLeft: `4px solid ${e}`}} 
                to={to[i]} />
        ));

        return (
            <nav className='dashboard-nav'>
                {NavButtons}
                {/* <NavButton  iconName="fas fa-power-off" color='#2fa53e' name="logout" bottom='bottom' border={}/> */}
                <button onClick={() => this.props.dispatch(clearAuth())} className='nav-button bottom' style={{borderLeft: '4px solid seagreen'}}>
                    <div className='icon'>
                        <i className='seagreen fas fa-power-off'></i>
                    </div>
                    <p className='dashboard-nav-words'>
                        Logout
                    </p>
                </button>
            </nav>
        )
    }
}

export default connect()(Nav)