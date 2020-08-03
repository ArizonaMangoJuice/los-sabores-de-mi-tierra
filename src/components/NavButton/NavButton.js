import React from 'react'
import './NavButton.css'
import { Link} from 'react-router-dom';

export default class NavButton extends React.Component{
    render(){
        return (
            <>
            <Link to={`/dashboard/${this.props.to}`} className={this.props.bottom ? this.props.bottom: `` }>
                <button className={this.props.bottom ? `nav-button ${this.props.bottom}` : `nav-button` } style={this.props.border}>
                    <div className='icon'>
                        <i className={`${this.props.iconName}`}></i>
                    </div>
                    <p className='dashboard-nav-words'>
                        {this.props.name}
                    </p>
                </button>
            </Link>
            </>
        )
    }
}