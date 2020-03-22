import React from 'react'
import './NavButton.css'


export default class NavButton extends React.Component{
    render(){
        return (
            <button className={`nav-button ${this.props.bottom}`}>
                <div className='icon'>
                    <i class={this.props.iconName}></i>
                </div>
                <p className='dashboard-nav-words'>
                    {this.props.name}
                </p>
            </button>
        )
    }
}